SideTable.Views.GamesIndexLong = SideTable.Views.GameSearchView.extend({

  template: JST['games/index_short'],

  initialize: function(options) {
    this.itemView = SideTable.Views.GameItemLong;
    this.selector = ".game-index-long";
    
    SideTable.Views.GameSearchView.prototype.initialize.apply(this,arguments);
  },
});
