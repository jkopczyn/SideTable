SideTable.Collections.Games = Backbone.Collection.extend({

  model: SideTable.Models.Game,
  url: SideTable.baseUrl+"/api/games",

  initialize: function(models, options){
    options = options || {};
    this.url = options.url || this.url;
    this.getWithFetch = this.getOrFetch;
    this.queryObject = (options.search && options.search.query) || {}
  },

  parse: function(response) {
    this.page = response.page;
    this.total_pages = response.total_pages;
    return response.games;
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
    options.remove = false;
    options.data = options.data || { page: 1};
    if (!this.queryObject || $.isEmptyObject(this.queryObject)) {
      Backbone.Collection.prototype.fetch.call(this, options);
    } else {
      var quObj = _.extend(this.queryObject, options.data.query || {});
      options.data.query = quObj;
      Backbone.Collection.prototype.fetch.call(this, options);
    }
  },
});
