SideTable.Routers.Router = Backbone.Router.extend({

  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.shelves = new SideTable.Collections.Shelves(); //current user's shelves
    this.games = new SideTable.Collections.Games(); //all games
  },

  routes: {
    "": "allGames",
    "shelves/new": "newShelf",
    "shelves/:shelf_id": "showShelf",
    "games/:id": "showGame",
  },

  showGame: function(id) {
    var v = new SideTable.Views.GameShow({
      model: this.games.getOrFetch(id)
    });
    this._swapView(v);
  },

  showShelf: function(id) {
    var v = new SideTable.Views.ShelfShowShort({
      model: this.shelves.getOrFetch(id)
    });
  },

  allGames: function() {
    this.games.fetch();
    var v = new SideTable.Views.GamesIndexShort({
      collection: this.games,
    });
    this._swapView(v);
  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  },

});
