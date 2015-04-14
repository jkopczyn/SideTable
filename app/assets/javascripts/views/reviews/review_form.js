SideTable.Views.ReviewForm = Backbone.View.extend({

  template: JST['reviews/form'],
  tagName: "form",
  className: "edit-form",

  initialize: function(options) {
  },

  render: function() {
    this.$el.html(this.template({ review: this.model }));
    return this;
  },

  submitForm: function(options) {
    var reviewHash = this.$el.serializeJSON();
    this.model.save(reviewHash, options);
  },
});
