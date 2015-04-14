SideTable.Views.ReviewsIndex = Backbone.CompositeView.extend({

  template: JST['reviews'],

  initialize: function(options) {
    this.itemView = SideTable.Views.ReviewShowItem;
    this.selector = ".review-list";

    this.listenTo(this.collection, "add", this.addReview);
    this.listenTo(this.collection, "remove", this.removeReview);
    this.collection.each(this.addReview.bind(this)); 
  },

  render: function() {
    this.$el.html(this.template({ reviews: this.collection }));
    this.attachSubviews();
    return this;
  },

  addReview: function(review) {
      var view = new this.itemView({ model: review });
      this.addSubview(this.selector, view);
  },

  removeReview: function(review) {
    var subviews = _.clone(this.subviews(this.selector));
    _(subviews).each(function (subview) {
      if(subview.model == review) {
        this.removeSubview(this.selector, subview);
      }
    }.bind(this));
  },

});
