SideTable.Views.RatingShow = Backbone.View.extend({
  className: "rateyo-rating",

  initialize: function(options) {
    var defaults = { starWidth: "30px" };
    this.options = _.extend(defaults, options);
    this.listenTo(this.model, "sync change:score", this.render);
  },

  events: {
    "rateyo.change": "changeRating",
  },

  render: function() { 
    if (this.model.get('score')) {
      var rating = this.model.get('score')/10 || 0;
    } else {
      var rating = 0;
    }
      this.$el.rateYo(_.extend(this.options, { rating: rating }));
      return this;
  },

  changeRating: function(event, data) {
    this.model.save({score: data.rating * 10 });
  },

});
