SideTable.Views.GameItemLong = Backbone.View.extend({

  template: JST['games/item_long'],
  tagName: "li",
  className: "game-item-long clearfix",

  initialize: function(options) {
    this.listenTo(this.model, "sync change", this.render);
  },

  render: function() {
    this.$el.html(this.template({
      game: this.model, 
    }));
    return this;
  },

});
