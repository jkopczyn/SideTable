SideTable.Views.GameShow = Backbone.CompositeView.extend({

  template: JST['games/show'],
  className: "",

  initialize: function(options) {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.ratings(), "sync change add remove", 
                  this.renderGroupRating);

    this.shelves = SideTable._router.shelves;
    this.shelves.fetch();
    this.addSubview(".reviews-box", new SideTable.Views.ReviewsIndex(
      { collection: this.model.reviews() }
    ));
  },

  events: {
    "click .back-button": "goBack",
    "click .shelve-button": "addShelfForm",
    "submit .shelf-form-container": "submitShelfForm",
    "click .add-review": "addReviewForm",
    "submit .add-review-form": "removeReviewForm",
    "rateyo.set .personal-rating": "setRating"
  },

  render: function(options) {
    this.$el.html(this.template(_.extend({
      game: this.model,
      canReview: !this.reviewExists(), 
    }, options)));
    this.attachSubviews();
    this.renderGroupRating();
    if (CurrentUser.id) {
      this.renderUserRating();
    }
    return this;
  },

  goBack: function(event) {
    window.history.back();
  },

  addShelfForm: function(event) {
    event.preventDefault();
    this.removeSubviews('.shelf-form-container');
    this.addSubview('.shelf-form-container', 
      new SideTable.Views.GameShelvingForm({
        model: this.model,
        shelves: this.shelves,
      }));
  },

  submitShelfForm: function(event) {
    event.preventDefault();
    var shelvingHash = this.$(".shelf-form-container form").serializeJSON();
    var onShelf = (this.shelves.get(shelvingHash["shelf_id"]).games().get(this.model.id) != undefined)
    var method, success, url;
    if(onShelf) {
      url = "/api/shelving/";
      method = "DELETE";
      success = function (response) {
        this.model.set(response["game"]);
        this.shelves.get(response["shelf"]["id"]).games().remove(this.model);
        this.subviews('.shelf-form-container')[0].render();
      }.bind(this)
    } else {
      url = "/api/shelvings";
      method = "POST";
      success = function (response) {
        this.model.set(response["game"]);
        this.shelves.get(response["shelf"]["id"]).games().add(this.model);
        this.subviews('.shelf-form-container')[0].render();
      }.bind(this)
    }
    shelvingHash["game_id"] = this.model.id;
    $.ajax({ 
      url: url, 
      data: {"shelving": shelvingHash},
      method: method,
      success: success,
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

  ratingDefaults: { starWidth: "30px", },

  renderGroupRating: function() {
    var selector = ".community-rating";
    var rating = this.model.averageRating();
    var options = _.extend({}, this.ratingDefaults);
    options.rating = (rating.get('score') || 0)/10;
    options.readOnly = true;
    this.$(selector).rateYo(options);
  },

  renderUserRating: function() {
    var selector = ".personal-rating";
    var rating = this.model.userRating();
    var options = _.extend({}, this.defaults);
    options.rating = (rating.get('score') || 0)/10;
    this.$(selector).rateYo(options);
  },

  setRating: function(event,data) {
    var rating = this.model.userRating();
    rating.set('score', data.rating*10);
    if(rating.get('score') > 0) {
      rating.save();  
    }
  },
});
