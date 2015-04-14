SideTable.Collections.Reviews = Backbone.Collection.extend({

  model: SideTable.Models.Review,

  initialize: function(options) {
    this.getWithFetch = this.getOrFetch;
    this.game = options.game;
  },

  getOrFetch: function(id) {
    var review = this.get(id);
    if(review) {
      review.fetch();
    } else {
      review = new SideTable.Models.Shelf({ id: id });
      review.fetch({
        success: function(response) {
          this.add(review);
          review.save()
        }.bind(this),
      });
    }
    return review;
  },


});
