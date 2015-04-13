SideTable.Views.GameShelvingForm = Backbone.View.extend({

  tagName: "form",
  className: "form-inline shelving-form",
  template: JST['games/shelving_form'],

  initialize: function(options) {
    this.shelves = options.shelves.filter(function(shelf) {
      return !(shelf.games().find(this.model));
    }, this);
  },

  render: function() {
    this.$el.html(this.template({
      shelves: this.shelves,
    }));
    return this;
  },
});
