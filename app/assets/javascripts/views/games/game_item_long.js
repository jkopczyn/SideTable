SideTable.Views.GameItemLong = Backbone.CompositeView.extend({

  template: JST['games/item_long'],
  tagName: "li",
  className: "game-item-long clearfix",

  initialize: function(options) {
    this.shelf = options.shelf;
    this.listenTo(this.model, "sync change", this.render);
    this.listenTo(this.model.ratings(), "sync change add remove", 
                  this.renderGroupRating);
    this.model.trigger('sync');
  },

  events: {
    "click .remove-button": "removeFromShelf"
  },

  render: function() {
    this.$el.html(this.template({
      game: this.model, 
      shelf: this.shelf,
    }));
    this.attachSubviews();
    this.renderGroupRating();
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

  ratingDefaults: { starWidth: "30px", },
  
  renderGroupRating: function() {
    var selector = ".community-rating";
    var rating = this.model.averageRating();
    var options = _.extend({}, this.ratingDefaults);
    options.rating = (rating.get('score') || 0)/10;
    options.readOnly = true;
    this.$(selector).rateYo(options);
  },
});
