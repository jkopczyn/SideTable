SideTable.Models.Search = Backbone.Model.extend({

  initialize: function(options) {
    this.set({query: this.parseQuery(options.queryString)});
    this.unset('queryString');
    this.query = this.get('query');
  },

  save: function() {
    //Searches should not be saved
    return null;
  },

  sync: function() {
    //Searches should not be synced
    return null;
  },

  parseQuery : function(params) {
    var strings = params.split("&");
    var query = {}
    _.each(strings, function(string) {
      var kv = string.split("=");
      query[kv[0]]=kv[1];
    });
    return query
  },

  parse: function(response) {
    return response
  },

});
