window.SideTable = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    this._router = new SideTable.Routers.Router({
      $rootEl: $('#content'),
    });
    $(Backbone.history.start());
  }
};

$(document).ready(function(){
  SideTable.initialize();
});
