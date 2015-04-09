SideTable.Collections.Games = Backbone.Collection.extend({

  model: SideTable.Models.Game,
  url: "api/games",

  initialize: function(){
    this.getWithFetch = this.getOrFetch;
  },

  getOrFetch: function(id) {
    var game = this.get(id);
    if(game) {
      game.fetch();
    } else {
      game = new SideTable.Models.Game({ id: id });
      game.fetch({
        success: function(response) {
          this.add(game);
          game.save()
        }.bind(this),
      });
    }
    return game;
  },
});
