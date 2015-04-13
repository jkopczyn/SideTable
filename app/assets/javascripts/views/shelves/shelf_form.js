SideTable.Views.ShelfForm = Backbone.View.extend({

  tagName: "form",
  className: "form-inline shelf-form",
  template: JST['shelves/form'],

  initialize: function(options) {
    this.userId = options.userId;
  },

  render: function() {
    this.model = this.model || new SideTable.Models.Shelf({});
    this.$el.html(this.template({
      shelf: this.model,
      userId: this.userId,
    }));
    return this;
  },

});
