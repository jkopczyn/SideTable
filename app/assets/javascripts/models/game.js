SideTable.Models.Game = Backbone.Model.extend({
  urlRoot: "/api/games",

  initialize: function(options) {
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

  ratings: function() {
    if (!this._ratings){
      this._ratings = new SideTable.Collections.Ratings({ game: this });
    }
    return this._ratings;
  },

  reviews: function() {
    if (!this._reviews){
      this._reviews = new SideTable.Collections.Reviews({ game: this });
    }
    return this._reviews;
  },

});
