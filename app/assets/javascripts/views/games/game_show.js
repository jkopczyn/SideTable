SideTable.Views.GameShow = Backbone.CompositeView.extend({

  template: JST['games/show'],

  initialize: function(options) {
    this.listenTo(this.model, "sync", this.render);
    this.shelves = SideTable._router.shelves;
    this.shelves.fetch();
  },

  events: {
    "click .back-button": "goBack",
    "click .shelve-button": "addShelfForm",
    "submit .shelf-form-container": "submitShelfForm",
  },

  render: function() {
    this.$el.html(this.template({
      game: this.model
    }));
    this.attachSubviews();
    return this;
  },

  goBack: function(event) {
    window.history.back();
  },

  addShelfForm: function(event) {
    event.preventDefault();
    this.addSubview('.shelf-form-container', 
      new SideTable.Views.GameShelvingForm({
        model: this.model,
        shelves: this.shelves,
      }));
  },

  submitShelfForm: function(event) {
    event.preventDefault();
    var shelvingHash = this.$(".shelf-form-container form").serializeJSON();
    shelvingHash["game_id"] = this.model.id;
    $.ajax({ url: "/api/shelvings", data: {"shelving": shelvingHash}, method: "POST",
           success: function (response) {
             this.model.set(response["game"]);
             this.shelves.get(response["shelf"]["id"]).games().add(this.model);
             this.removeSubviews('.shelf-form-container');
             this.$('.shelf-form-container').empty(); 
           }.bind(this),
    });
  },
});
