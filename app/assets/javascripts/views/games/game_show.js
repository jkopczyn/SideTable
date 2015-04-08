SideTable.Views.GameShow = Backbone.View.extend({

  template: JST['games/show'],

  initialize: function(options) {
    this.listenTo(this.model, "sync", this.render);
  },

  events: {
    "click .back-button": "goBack",
  },

  render: function() {
    this.$el.html(this.template({
      game: this.model
    }));
    return this;
  },

  goBack: function(event) {
    window.history.back();
  },

});
