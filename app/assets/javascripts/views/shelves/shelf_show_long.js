SideTable.Views.ShelfShowLong = Backbone.CompositeView.extend({

  template: JST['shelves/show_long'],

  initialize: function(options) {
    this.listenTo(this.model, "sync change:title", this.render);
    this.listenTo(this.model.games(), "remove sync", this.render);
    this.listenTo(this.model.games(), "add", this.addGame);

    this.model.games().each(this.addGame);
  },

  render: function() {
    this.$el.html(this.template({
      shelf: this.model 
    }));
    this.attachSubviews();
    return this;
  },

  addGame: function(game) {
      var view = new SideTable.Views.GameItemLong({ model: game });
      this.addSubview('.shelf-show-long', view);
  },
});
