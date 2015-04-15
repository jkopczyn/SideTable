SideTable.Collections.Ratings = Backbone.Collection.extend({

  model: SideTable.Models.Rating,

  initialize: function(options) {
    this.getWithFetch = this.getOrFetch;
    this.game = options.game;
  },

  getOrFetch: function(id) {
    var rating = this.get(id);
    if(rating) {
      rating.fetch();
    } else {
      rating = new SideTable.Models.Rating({ id: id });
      rating.fetch({
        success: function(response) {
          this.add(rating);
          rating.save()
        }.bind(this),
      });
    }
    return rating;
  },

  findByUserId: function(userId) {
    return this.find(function(rating) { return rating.get('user_id') == userId });
  },

//  findByGameId: function(gameId) {
//    return this.find(function(rating) { return rating.get('game_id') == gameId });
//  },
});
