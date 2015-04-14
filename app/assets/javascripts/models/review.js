SideTable.Models.Review = Backbone.Model.extend({
  urlRoot: "api/reviews/",

  initialize: function(options) {
    options.game = options.game || {};
    options.game.id = this.game_id = options.game.id || options.game_id;
    this.game(options.game);

    options.user = options.user || {};
    options.user.id = this.user_id = options.user.id || options.user_id;
    this.user(options.user);
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
