SideTable.Views.ReviewIndexItem = Backbone.CompositeView.extend({

  template: JST['reviews/form'],
  tagName: "form",

  initialize: function(options) {
  },

  render: function() {
    this.$el.html(template({ review: this.model }));
    return this;
  },

  submitForm: function(options) {
    var reviewHash = this.$el.serializeJSON();
    this.model.save(reviewHash, options);
  },
});
