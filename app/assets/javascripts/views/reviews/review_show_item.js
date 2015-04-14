SideTable.Views.ReviewShowItem = Backbone.CompositeView.extend({

  template: JST['reviews/show_item'],
  tagName: "li",

  initialize: function(options) {
    //this.model.user.fetch();
    //this.addSubview(".user-show-small", new SideTable.View.UserShowSmall({
    //  model: this.model.user,
    //}))
    this.listenTo(this.model, "sync change", this.render);
    this.model.fetch();
  },

  events: {
    "click .edit-review": "addEditForm",
    "submit .edit-form": "removeEditForm",
  },

  render: function() {
    this.$el.html(this.template({ review: this.model }));
    this.attachSubviews();
    return this;
  },

  addEditForm: function(event) {
    event.preventDefault();
    this.addSubview(".review-item", 
      new SideTable.View.ReviewForm({model: this.model}));
  },

  removeEditForm: function(event) {
    event.preventDefault();
    this.subviews(".review-item")[0].submitForm(
      {success: function(response) {
        this.removeSubviews(".review-item");
        this.render();
      }.bind(this),
    });
  },
});
