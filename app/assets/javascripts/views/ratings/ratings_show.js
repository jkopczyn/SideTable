SideTable.Views.RatingShow = Backbone.View.extend({
  className: "rateyo-rating",

  initialize: function(options) {
    var defaults = { starWidth: "30px" };
    this.options = _.extend(defaults, options);
    //this.listenTo(this.model, "sync change:score", this.render);
  },

  events: {
    "rateyo.change": "changeRating",
  },

  render: function() {
    
    this.$el.rateYo(_.extend(this.options, { rating: 
                             this.model.get('score')/10 || 0 }));
    return this;
  },

  changeRating: function(event, data) {
    this.model.save({score: data.rating});
  },

});
