SideTable.Views.GameItemShort = Backbone.View.extend({

  template: JST['games/item_short'],
  tagName: "li",
  className: "game-item-short row",

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

  ratingDefaults: { starWidth: "30px", },

  renderGroupRating: function() {
    var selector = ".community-rating";
    var rating = this.model.averageRating();
    var options = _.extend({}, this.defaults);
    options.rating = (rating.get('score') || 0)/10;
    options.readOnly = true;
    this.$(selector).rateYo(options);
  },

});
