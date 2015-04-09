SideTable.Views.SearchForm = Backbone.CompositeView.extend({

  template: JST['searches/form'],

  initialize: function(options) {
  },

  render: function() {
    this.$el.html(this.template({
      search: this.model 
    }));
    this.attachSubviews();
    return this;
  },

  addSomething: function(game) {
      var view = new SideTable.Views.SOMETHING({ model: something });
      this.addSubview('selector', view);
  },
});
