SideTable.Views.GameShelvingForm = Backbone.View.extend({

  tagName: "form",
  className: "form-inline shelving-form",
  template: JST['games/shelving_form'],

  initialize: function(options) {
    this.shelves = options.shelves;
    this.shelves.fetch();
    this.listenTo(this.shelves, "sync", function(event) {
      this.render();
    }.bind(this));
  },

  render: function() {
    this.filterShelves();
    this.$el.html(this.template({
      shelves: this.shelves,
    }));
    return this;
  },

  filterShelves: function() {
    var that = this;
    var check = function(game) { 
      return game.id !== that.model.id; 
    };
    var please = function(shelf) { 
      var opening = shelf.games().every(check) && shelf.games().length > 0;
      return opening;
    };
    var arr = this.shelves.filter(please, this);
    this.shelves.set(arr);
  },
});
