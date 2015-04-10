SideTable.Routers.Router = Backbone.Router.extend({

  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    //current user's shelves, but *all* games
    this.shelves = new SideTable.Collections.Shelves();
    this.games = new SideTable.Collections.Games();
  },

  routes: {
    "": "allGames",
    "games": "allGames",
    "games/search?:params": "showFullSearch",
    "shelves/new": "newShelf",
    "shelves/search?:params": "showShelfSearch",
    "shelves/:id": "showShelf",
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
    this._swapView(v);
  },

  allGames: function() {
    this.games.fetch();
    var v = new SideTable.Views.GamesIndexShort({
      collection: this.games,
    });
    this._swapView(v);
  },

  showFullSearch: function(params) {
    var v = new SideTable.Views.GamesIndexShort({
      collection: new SideTable.Collections.Games(),
    });
    this._swapView(v);
    v.loadSearch(params);
    //    var search, games;
    //if (params) {
    //  search = new SideTable.Models.Search({queryString: params});
    //  games = new SideTable.Collections.Games({search: search});
    //} else {
    //  games = this.games;
    //}
  },

  showShelfSearch: function(params) {
//    TODO
//    var search = new SideTable.Models.Search({queryString: params});
//    var v = new SideTable.Views.ShelfSearch({
//      collection: this.shelves.allGames(),
//    });
//    this._swapView(v);
  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  },

});
