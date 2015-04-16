window.SideTable = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  baseUrl: "http://www.sidetable.us",
  initialize: function() {
    this._router = new SideTable.Routers.Router({
      $rootEl: $('#content'),
    });
    $(Backbone.history.start());
    this._navbar = new SideTable.Views.Navbar();
    $($('.global-header').html(this._navbar.render().$el));
  }
};

$(document).ready(function(){
  SideTable.initialize();
});
