SideTable.Collections.Ratings = Backbone.Collection.extend({
  url: "api/ratings/",
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

  getOrFetchByUser: function(id) {
    var rating = this.findByUserId(id);
    if(rating) {
      rating.fetch();
    } else {
      rating = new SideTable.Models.Rating({  user_id: id, 
                                              game_id: this.game.id });
      this.game.fetch({
        success: function(response) {
          var newRating = this.findByUserId(id);
          if (newRating) {
            rating.set(newRating.attributes);
            this.remove(newRating);
            this.add(rating);
          }
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
