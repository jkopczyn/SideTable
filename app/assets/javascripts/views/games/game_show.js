SideTable.Views.GameShow = Backbone.CompositeView.extend({

  template: JST['games/show'],

  initialize: function(options) {
    this.listenTo(this.model, "sync", this.render);
    this.shelves = SideTable._router.shelves;
    this.shelves.fetch();
    this.addSubview(".reviews-box", new SideTable.Views.ReviewsIndex(
      { collection: this.model.reviews() }
    ));
    this.addGroupRating();
    this.addUserRating();
  },

  events: {
    "click .back-button": "goBack",
    "click .shelve-button": "addShelfForm",
    "submit .shelf-form-container": "submitShelfForm",
    "click .add-review": "addReviewForm",
    "submit .add-review-form": "removeReviewForm",
  },

  render: function(options) {
    this.$el.html(this.template(_.extend({
      game: this.model,
      canReview: !this.reviewExists(), 
    }, options)));
    this.attachSubviews();
    return this;
  },

  goBack: function(event) {
    window.history.back();
  },

  addShelfForm: function(event) {
    event.preventDefault();
    this.addSubview('.shelf-form-container', 
      new SideTable.Views.GameShelvingForm({
        model: this.model,
        shelves: this.shelves,
      }));
  },

  submitShelfForm: function(event) {
    event.preventDefault();
    var shelvingHash = this.$(".shelf-form-container form").serializeJSON();
    shelvingHash["game_id"] = this.model.id;
    $.ajax({ url: "/api/shelvings", data: {"shelving": shelvingHash},
           method: "POST",
           success: function (response) {
             this.model.set(response["game"]);
             this.shelves.get(response["shelf"]["id"]).games().add(this.model);
             this.removeSubviews('.shelf-form-container');
             this.$('.shelf-form-container').empty(); 
           }.bind(this),
    });
  },

  addReviewForm: function(event) {
    event.preventDefault();
    this.reviewForm = new SideTable.Views.ReviewNewForm({ 
      model: new SideTable.Models.Review({ 
        game: this.model,
        user_id: CurrentUser.id,
      }),
    });
    this.render({canReview: false});
    this.prependSubview(".reviews-box", this.reviewForm );
  },

  removeReviewForm: function(event) {
    event.preventDefault();
    this.reviewForm.submitForm(
      {success: function(response) {
        this.removeSubview(".reviews-box", this.reviewForm);
        this.model.reviews().add(this.reviewForm.model);
      }.bind(this),
    });
  },

  reviewExists: function() {
    return this.model.reviews().any(function (review) {
      return review.user_id == CurrentUser.id;
    });
  },

  addGroupRating: function() {
    var selector = ".community-rating";
    var rating = this.model.averageRating();
    if (rating.get('score')) {
      this.addSubview(selector, new SideTable.Views.RatingShow({ 
        readOnly: true, 
        model: rating,
      }));
    }
  },

  addUserRating: function() {
    var selector = ".personal-rating";
    var rating = this.model.ratings().findByUserId(CurrentUser.id) ||
      new SideTable.Models.Rating({ user_id: CurrentUser.id, game_id: this.id});
    this.addSubview(selector, new SideTable.Views.RatingShow({ 
      model: rating
    }));
  },
});
