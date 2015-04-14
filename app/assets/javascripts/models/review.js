SideTable.Models.Review = Backbone.Model.extend({

  urlRoot: "api/reviews",

  initialize: function(options) {
    this.game(options.game);
    this.user(options.user);
    this.user_id = options.user_id;
  },
  
  game: function(options) {
    if(!this._game) {
      this._game = new SideTable.Models.Game(options);
    }
    return this._game
  },

  user: function(options) {
    if(!this._user) {
      this._user = new SideTable.Models.User(options);
    }
    return this._user
  },
  
  parse: function(response) {
    if (response.user) {
      this.user().set(response.user);
      delete response.user;
    }
    return response
  },
});
