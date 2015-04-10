SideTable.Views.SearchForm = Backbone.View.extend({

  tagName: "form",
  className: "form-inline search-form",
  template: JST['searches/form'],

  initialize: function(options) {
    options = options || {};
    this.selector = options.selector || ".search-field";
  },

  events: {
    'submit .search-form': "passQuery",
  },

  render: function() {
    this.$el.html(this.template({
      search: this.model 
    }));
    return this;
  },

  passQuery: function() {
    var selector = this.selector || ".search-field";
    return "title="+this.$(selector).serializeJSON().title;
  },
});
