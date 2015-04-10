SideTable.Views.ShelfShowLong = SideTable.Views.GameSearchView.extend({

  template: JST['shelves/show_long'],

  initialize: function(options) {
    this.itemView = SideTable.Views.GameItemLong;
    this.selector = ".shelf-show-long";
    this.collection = this.model.games();

    SideTable.Views.GameSearchView.prototype.initialize.apply(this,arguments);
  },

  render: function() {
    return SideTable.Views.GameSearchView.prototype.render.call(
      this, { shelf: this.model })
  },
});
