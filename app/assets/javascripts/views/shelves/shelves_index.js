SideTable.Views.ShelvesIndex = Backbone.CompositeView.extend({

  template: JST['shelves/index'],

  initialize: function() {
    this.listenTo(this.collection, "sync change", this.render);
    this.listenTo(this.collection, "add", this.addShelf);
    this.listenTo(this.collection, "remove", this.removeShelf);

    this.itemView = SideTable.Views.ShelfIndexItem;
    this.selector = ".shelf-index-list";

    this.collection.fetch();
    this.collection.each(this.addShelf.bind(this));
  },

  events: {
    "click .new-shelf a": "attachNewForm",
    "submit .shelf-form": "handleNewSubmit",
  },


  render: function() {
    this.$el.html(this.template({shelves: this.collection }));
    this.attachSubviews();
    return this;
  },
  
  addShelf: function(shelf) {
      var view = new this.itemView({ model: shelf });
      shelf.collection = this.collection;
      this.addSubview(this.selector, view);
  },

  removeShelf: function(shelf) {
    var subviews = _.clone(this.subviews(this.selector));
    _(subviews).each(function (subview) {
      if(subview.model == shelf) {
        this.removeSubview(this.selector, subview);
      }
    }.bind(this));
  },

  attachNewForm: function(event) {
    event.preventDefault();
    this.$(".new-shelf").empty();
    this.addSubview(".new-shelf", new SideTable.Views.ShelfForm())
  },

  handleNewSubmit: function(event) {
    event.preventDefault();
    var newModel = this.$(".new-shelf").serializeJSON();
    this.collection.create(newModel, { wait: true, 
      success: function(response) {
        Backbone.history.navigate("#/shelves/"+newModel.id+"");
      }
    });
    this.$('text').val('');
  },
});
