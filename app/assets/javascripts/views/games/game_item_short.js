SideTable.Views.GameItemShort = Backbone.View.extend({

  template: JST['games/item_short'],
  tagName: "li",
  className: "game-item-short clearfix",

  initialize: function(options) {
    this.listenTo(
         this.model, 
         "sync change:title change:description change:image_url", 
         this.render
    );
  },

  render: function() {
    this.$el.html(this.template({
      game: this.model, 
    }));
    return this;
  },

});
