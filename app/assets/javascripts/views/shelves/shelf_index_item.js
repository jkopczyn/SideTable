SideTable.Views.ShelfIndexItem = Backbone.View.extend({

  template: JST['shelves/index_item'],
  tagName: "li",
  className: "shelf-index-item clearfix",

  initialize: function(options) {
    this.listenTo(this.model, "sync change", this.render);
  },

  render: function() {
    this.$el.html(this.template({
      shelf: this.model, 
    }));
    return this;
  },

});
