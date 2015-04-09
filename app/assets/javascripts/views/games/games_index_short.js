SideTable.Views.GamesIndexShort = Backbone.CompositeView.extend({

  template: JST['games/index_short'],

  initialize: function(options) {
    this.listenTo(this.collection, "sync remove change:title", this.render);
    this.listenTo(this.collection, "add", this.addGame);
    this.listenTo(this.collection, "remove", this.removeGame);
    this.collection.each(this.addGame.bind(this));
  },

  render: function() {
    this.$el.html(this.template({
      games: this.collection 
    }));
    this.attachSubviews();
    return this;
  },
  
  addGame: function(game) {
      var view = new SideTable.Views.GameItemShort({ model: game });
      this.addSubview('.game-index-short', view);
  },

  removeGame: function(game) {
    var selector = '.game-index-short'
    _(this.subviews(selector)).each(function (subview) {
      if(subview.model == game) {
        this.removeSubview(selector, subview);
      }
    }.bind(this));
  },
});
