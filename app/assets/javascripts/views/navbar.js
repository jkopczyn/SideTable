SideTable.Views.Navbar = Backbone.View.extend({

  template: JST['navbar'],

  events: {
    "click .logo": "goHome",
  },

  render: function() {
    this.$el.html(this.template({}));
    return this;
  },

  goHome: function() {
    Backbone.history.navigate("/", {trigger: true});
  },
});
