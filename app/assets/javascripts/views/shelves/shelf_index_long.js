SideTable.Views.ShelfIndexLong = SideTable.Views.GameSearchView.extend({

  template: JST['shelves/show_long'],

  initialize: function(options) {
    this.itemView = SideTable.Views.GameItemLong;
    this.selector = ".shelf-show-long";
    this.shelves = this.model.collection;
    this.addSubview(".shelf-list", 
      new SideTable.Views.ShelvesIndexBox(
        {collection: this.shelves}
      )
    );

    //kludge it up to make the view show the first shelf once it
    //definitely has one
    this.listenToOnce(this.shelves, "sync", function() {
      this.model = this.shelves.first();
      if (this.model) {
        this.model.fetch();
        this.collection = this.model.games();
        this.listenTo(this.model, "sync change:title", this.render);
      } else {
        this.collection = SideTable._router.games;
      }
      SideTable.Views.GameSearchView.prototype.initialize.apply(this,arguments);
    });
    this.shelves.fetch();
  },

  render: function() {
    return SideTable.Views.GameSearchView.prototype.render.call(
      this, { shelf: this.model, shelves: this.shelves })
  },
});
