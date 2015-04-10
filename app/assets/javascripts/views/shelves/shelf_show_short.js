SideTable.Views.ShelfShowShort = Backbone.CompositeView.extend({

  template: JST['shelves/show_short'],

  initialize: function(options) {
    this.itemView = SideTable.Views.GameItemShort;
    this.selector = ".shelf-show-short";
    this.collection = this.model.games();

    SideTable.Views.GameSearchView.prototype.initialize.apply(this,arguments);
  },

  render: function() {
    return SideTable.Views.GameSearchView.prototype.render.call(
      this, { shelf: this.model })
  },
});
