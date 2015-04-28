SideTable.Collections.Shelves = Backbone.Collection.extend({

  url: SideTable.baseUrl+"/api/shelves",
  model: SideTable.Models.Shelf,

  initialize: function(options) {
    this.getWithFetch = this.getOrFetch;
    this.user_id = options.user_id;
  },

  getOrFetch: function(id) {
    var game = this.get(id);
    if(game) {
      game.fetch();
    } else {
      game = new SideTable.Models.Shelf({ id: id });
      game.fetch({
        success: function(response) {
          this.add(game);
          game.save()
        }.bind(this),
      });
    }
    return game;
  },

  allGames: function(options) {
    debugger
    //pass options down to Collections.Games constructor
  }
});
