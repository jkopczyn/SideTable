SideTable.Routers.Router = Backbone.Router.extend({

  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.shelves = new SideTable.Collections.Shelves(); //current user's shelves
    this.games = new SideTable.Collections.Games(); //all games
  },

  routes: {
    "": "allGames",
    "games": "allGames",
    "games/search/:params": "showFullSearch",
    "shelves/new": "newShelf",
    "shelves/search/:params": "showShelfSearch",
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
    var v = new SideTable.Views.ShelfShowLong({
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

  showFullSearch: function(params) {
    var v = SideTable.Views.FullSearch({
      query: new SideTable.Models.Search({params: params}),
      collection: this.games,
    });
  },

  showShelfSearch: function(params) {
    var v = SideTable.Views.ShelfSearch({
      query: new SideTable.Models.Search({params: params}),
      collection: this.shelves.allGames(),
    });
  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  },

});
