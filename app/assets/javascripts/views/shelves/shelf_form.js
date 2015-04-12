SideTable.Views.ShelfForm = Backbone.View.extend({

  tagName: "form",
  className: "form-inline shelf-form",
  template: JST['shelves/form'],

  render: function() {
    this.model = this.model || new SideTable.Models.Shelf({});
    this.$el.html(this.template({
      search: this.model 
    }));
    return this;
  },

});
