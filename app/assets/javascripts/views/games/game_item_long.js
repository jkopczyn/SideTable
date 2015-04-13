SideTable.Views.GameItemLong = Backbone.View.extend({

  template: JST['games/item_long'],
  tagName: "li",
  className: "game-item-long clearfix",

  initialize: function(options) {
    this.shelf = options.shelf;
    this.listenTo(this.model, "sync change", this.render);
  },

  events: {
    "click .remove-button": "removeFromShelf"
  },

  render: function() {
    this.$el.html(this.template({
      game: this.model, 
      shelf: this.shelf,
    }));
    return this;
  },

  removeFromShelf: function(event) {
    event.preventDefault();
    var shelvingHash = { "game_id": this.model.id, "shelf_id": this.shelf.id};
    $.ajax({ url: "/api/shelving/", 
           data: {"shelving": shelvingHash}, 
           method: "DELETE",
           success: function (response) {
             this.shelf.games().remove(this.model);
           }.bind(this),
    });
  },

});
