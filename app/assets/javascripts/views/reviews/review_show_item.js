SideTable.Views.ReviewShowItem = Backbone.CompositeView.extend({

  template: JST['reviews/show_item'],
  tagName: "li",
  className: "list-group-item",

  initialize: function(options) {
    //this.model.user.fetch();
    this.addSubview(".user-show-small", new SideTable.Views.UserShowSmall({
      model: this.model.user(),
    }))
    this.addSubview(".review-item", new SideTable.Views.ReviewText({
      model: this.model,
    }))
    this.listenTo(this.model, "sync change", this.render);
  },

  events: {
    "click .edit-review": "addEditForm",
    "submit .edit-review-form": "removeEditForm",
  },

  render: function() {
    this.$el.html(this.template({ review: this.model }));
    this.attachSubviews();
    return this;
  },

  addEditForm: function(event) {
    event.preventDefault();
    this.removeSubviews(".review-item");
    this.addSubview(".review-item", 
      new SideTable.Views.ReviewEditForm({model: this.model}));
  },

  removeEditForm: function(event) {
    event.preventDefault();
    this.subviews(".review-item")[0].submitForm(
      {success: function(response) {
        this.removeSubviews(".review-item");
        this.addSubview(".review-item", new SideTable.Views.ReviewText({
          model: this.model,
        }))
      }.bind(this),
    });
  },
});
