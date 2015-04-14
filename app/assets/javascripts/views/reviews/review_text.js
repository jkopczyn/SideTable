SideTable.Views.ReviewText = Backbone.View.extend({

  template: JST['reviews/text'],

  initialize: function(options) {
  },

  render: function() {
    this.$el.html(this.template({ review: this.model }));
    return this;
  },
});
