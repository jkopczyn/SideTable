SideTable.Collections.Games = Backbone.Collection.extend({

  model: SideTable.Models.Game,
  url: SideTable.baseUrl+"/api/games",

  initialize: function(options){
    options = options || {};
    this.getWithFetch = this.getOrFetch;
    this.queryObject = (options.search && options.search.query) || {}
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
        }.bind(this),
      });
    }
    return game;
  },
  
  fetch: function(options) {
    options = options || {};
    options.data = options.data || {};
    if (!this.queryObject || $.isEmptyObject(this.queryObject)) {
      Backbone.Collection.prototype.fetch.call(this, options);
    } else {
      var quObj = _.extend(this.queryObject, options.data.query || {});
      options.data.query = quObj;
      Backbone.Collection.prototype.fetch.call(this, options);
    }
  },
});
