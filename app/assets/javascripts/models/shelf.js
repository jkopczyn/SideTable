SideTable.Models.Shelf = Backbone.Model.extend({
  urlRoot: "api/shelves",

  initialize: function(options) {
    this.games = options.games;
  },

  parse: function(response) {
    //deal with attached games here:
    //stick them into a collection,
    //then set this.games to be that collection
    return response;
  },

});
