SideTable.Views.GameSearchView = Backbone.CompositeView.extend({

  initialize: function(options) {
    this.itemView = this.itemView || options.itemView;
    this.selector = this.selector || options.selector;
    //set these, template, and this.collection before calling super.initialize
    // and be sure to bind the init call to the subclass
    //anything pertaining to the collection rather than its elements,
    //or to the view's model (if any) should be handled in the subclass init

    this.listenTo(this.collection, "add", this.addGame);
    this.listenTo(this.collection, "remove", this.removeGame);
    this.listenTo(this.collection, "reset", this.handleReset);
    this.listenToScroll();
    this.collection.each(this.addGame.bind(this));
    this.addSubview('.search', new SideTable.Views.SearchForm());
  },

  events: {
    'submit .search-form': "newSearch",
  },

  render: function(options) {
    //if you need other things do them first and then return the super
    this.$el.html(this.template(_.extend({ games: this.collection }, options)));
    this.attachSubviews();
    return this;
  },
  
  addGame: function(game) {
      var view = new this.itemView({ model: game });
      this.addSubview(this.selector, view);
  },

  removeGame: function(game) {
    var subviews = _.clone(this.subviews(this.selector));
    _(subviews).each(function (subview) {
      if(subview.model == game) {
        this.removeSubview(this.selector, subview);
      }
    }.bind(this));
  },

  loadSearch: function(queryString) {
    search = new SideTable.Models.Search({ queryString: queryString });
    games = new SideTable.Collections.Games([],{ search: search });
    games.fetch({
      success: function() {
        this.collection.reset(games.models);
      }.bind(this)
    });
  },

  newSearch: function(event) {
    event.preventDefault();
    queryString = this.subview('.search').passQuery();
    this.loadSearch(queryString);
  },

  handleReset: function(models, options) {
    _.each(options.previousModels, this.removeGame.bind(this));
    models.each(this.addGame.bind(this));
    this.render();
  },

  listenToScroll: function() {
    var throttledCallback = _.throttle(this.addNextPage.bind(this), 500);
    $(window).scroll(throttledCallback);
  },

  addNextPage: function() {
    if(!this.isLoading && (!this.collection.total_pages || 
          this.collection.page < this.collection.total_pages)) {
      this.isLoading = true;
      this.collection.fetch({data: {page: (Number(this.collection.page) + 1)},
        success: function() {
          this.isLoading = false;
          this.render();
        }.bind(this),
      });
    }
  },
});
