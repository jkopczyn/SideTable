SideTable.Views.RatingShow = Backbone.View.extend({
  className: "rateyo-rating",

  initialize: function(options) {
    var defaults = { starWidth: "30px", 
    };
    //onChange: this.changeRating.bind(this),
    this.options = _.extend(defaults, options);
    this.listenTo(this.model, "sync change:score", this.render);
    this.$el.rateYo(this.options);

  },
//
//  events: {
//    "rateyo.change": "changeRating",
//    "rateyo.set": "setRating",
//  },

  render: function() { 
    this.$el.rateYo("option", "rating", this.score());
    return this;
  },

  score: function(val) {
    if (val) {
      this._score = val;
    } else if(this.model.get('score')) {
      this._score = this.model.get('score')/10;
    } else if (!this._score) {
      this._score = 0;
    }
    return this._score;
  },

  changeRating: function(event, data) {
    this.score(data.rating);
  },

  setRating: function(event,data) {
    this.changeRating(event,data);
    this.model.set('score', this.score()*10);
    if (this.model.user_id > 0 && this.score() > 0 ) {
      this.model.save();
    }
  },

});
