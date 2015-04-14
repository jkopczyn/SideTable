SideTable.Views.ReviewNewForm = Backbone.View.extend({

  template: JST['reviews/form'],
  tagName: "form",
  className: "add-review-form",

  initialize: function(options) {
  },

  render: function() {
    this.$el.html(this.template({ review: this.model }));
    return this;
  },

  submitForm: function(options) {
    var reviewHash = this.$el.serializeJSON();
    this.model.set(reviewHash);
    this.model.set('user_id', 
                   this.model.get('user_id') || 
                   this.model.user_id ||
                   this.model.user && this.model.user.id);
    this.model.set('game_id', 
                   this.model.get('game_id') || 
                   this.model.game_id ||
                   this.model.game && this.model.game.id);
    this.model.save(null, options);
  },
});
