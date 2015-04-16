SideTable.Models.Game = Backbone.Model.extend({
  urlRoot: "api/games/",

  initialize: function(options) {
    this.listenTo(this, "sync change", this.averageRating);
    this.listenTo(this, "sync change", this.userRating);
  },

  parse: function(response) {
    if(response.ratings) {
      this.ratings().set(response.ratings, {parse: true});
      delete response.ratings;
    }
    if(response.reviews) {
      this.reviews().set(response.reviews, {parse: true});
      delete response.reviews;
    }
    return response;
  },

  ratings: function(id) {
    if (!this._ratings){
      this._ratings = new SideTable.Collections.Ratings({ game: this });
    }
    return this._ratings;
  },

  averageRating: function() {
    if (!this._avg) {
      this._avg = new SideTable.Models.Rating({
        game_id: this.id,
        user_id: 0
      }); 
    }
    var score;
    var rateList = this.ratings().filter(function (rating) { 
      return $.isNumeric(rating.get('score'));
    });
    var scoreList = rateList.map(function(rating) {
      return rating.get('score');
    });

    if (rateList.length > 0 ) {
      score = _.foldl(scoreList, 
                      function(sum, s) { return sum+s  }, 0) / rateList.length;
    } else {
      score = undefined;
    }
    this._avg.set('score', score);
    return this._avg;
  },

  userRating: function () {
    var id = CurrentUser.id;
    return this.ratings().findByUserId(id) || new SideTable.Models.Rating({
      game_id: this.id,
      user_id: CurrentUser.id
    });
  },

  reviews: function() {
    if (!this._reviews){
      this._reviews = new SideTable.Collections.Reviews({ game: this });
    }
    return this._reviews;
  },

});
