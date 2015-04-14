SideTable.Models.Review = Backbone.Model.extend({

  user: function() {
    if(!this._user) {
      this._user = new SideTable.Models.User({ id: this.user_id });
      this._user.fetch();
    }
    return this._user
  },

  parse: function(response) {
    if (response.user) {
      this.user().set(response.user);
      delete response.user;
    }
    return response
  },
});
