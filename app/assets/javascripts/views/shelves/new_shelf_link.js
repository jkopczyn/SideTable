SideTable.Views.NewShelfLink = Backbone.View.extend({

  className: "new-shelf-link",
  tagName: "a",
  attributes: { "href": "#/shelves/new" },
 
  template: JST['shelves/new_link'],

  initialize: function(options) {
  },

  render: function() {
    this.$el.html(this.template({}));
    return this;
  },
});
