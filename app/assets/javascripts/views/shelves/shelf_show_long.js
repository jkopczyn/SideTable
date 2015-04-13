SideTable.Views.ShelfShowLong = SideTable.Views.GameSearchView.extend({

  template: JST['shelves/show_long'],

  initialize: function(options) {
    this.itemView = SideTable.Views.GameItemLong;
    this.selector = ".shelf-show-long";
    this.collection = this.model.games();
    this.shelves = this.model.collection;

    this.addSubview(".shelf-list", new SideTable.Views.ShelvesIndexBox(
      {collection: this.shelves}));

    SideTable.Views.GameSearchView.prototype.initialize.apply(this,arguments);
  },

  render: function() {
    return SideTable.Views.GameSearchView.prototype.render.call(
      this, { shelf: this.model, shelves: this.shelves })
  },

  addGame: function(game) {
    var view = new this.itemView({ model: game, shelf: this.model });
    this.addSubview(this.selector, view);
  },
});
