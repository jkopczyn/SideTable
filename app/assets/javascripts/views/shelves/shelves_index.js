SideTable.Views.ShelvesIndexBox = Backbone.CompositeView.extend({

  template: JST['shelves/index_box'],
  url: "api/shelves",

  initialize: function() {
    this.listenTo(this.collection, "sync change", this.render);
    this.listenTo(this.collection, "add", this.addShelf);
    this.listenTo(this.collection, "remove", this.removeShelf);

    this.itemView = SideTable.Views.ShelfIndexItem;
    this.selector = ".shelf-index-list";

    this.addNewLink();
    this.collection.fetch();
    this.collection.each(this.addShelf.bind(this));
  },

  events: {
    "click .new-shelf-link": "addNewForm",
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

  addNewForm: function(event) {
    event && event.preventDefault();
    var selector = ".new-shelf"
    this.removeSubviews(selector);
    this.addSubview(selector, new SideTable.Views.ShelfForm(
      {userId: this.collection.user_id }
    ));
  },

  addNewLink: function(event) {
    event && event.preventDefault();
    var selector = ".new-shelf"
    this.removeSubviews(selector);
    this.addSubview(selector, new SideTable.Views.NewShelfLink({}));
  },

  handleNewSubmit: function(event) {
    event.preventDefault();
    var newModel = this.$(".shelf-form").serializeJSON();
    this.collection.create(newModel, { wait: true, 
      success: function(response) {
        var selector = ".new-shelf";
        this.removeSubviews(selector);
        this.render();
        Backbone.history.navigate("#/shelves/"+newModel.id+"");
      }.bind(this),
    });
    this.$('text').val('');
  },
});
