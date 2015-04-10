SideTable.Views.UserShow = Backbone.View.extend({

  template: JST['users/show'],

  render: function() {
    var shelves = this.model.shelves();
    var shelf = shelves.first();
    return SideTable.Views.GameSearchView.prototype.render.call(
      this, { shelves : shelves, shelf: shelf })
  },
});
