SideTable.Views.GamesIndexShort = Backbone.CompositeView.extend({

  template: JST['games/index_short'],

  initialize: function(options) {
    this.listenTo(this.collection, "sync change:title", this.render);
    this.listenTo(this.collection, "add", this.addGame);
    this.listenTo(this.collection, "remove", this.removeGame);
    this.listenTo(this.collection, "reset", this.handleReset);
    this.collection.each(this.addGame.bind(this));
    this.addSubview('.search', new SideTable.Views.SearchForm());
  },

  events: {
    'submit .search-form': "newSearch",
  },

  render: function() {
    this.$el.html(this.template({
      games: this.collection 
    }));
    this.attachSubviews();
    return this;
  },
  
  addGame: function(game) {
      var view = new SideTable.Views.GameItemShort({ model: game });
      this.addSubview('.game-index-short', view);
  },

  removeGame: function(game) {
    var selector = '.game-index-short'
    var subviews = _.clone(this.subviews(selector));
    _(subviews).each(function (subview) {
      console.log(subviews);
      console.log(subview);
      if(subview.model == game) {
        this.removeSubview(selector, subview);
      }
    }.bind(this));
  },

  loadSearch: function(queryString) {
    search = new SideTable.Models.Search({ queryString: queryString });
    games = new SideTable.Collections.Games({ search: search });
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
});
