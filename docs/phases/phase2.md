# Phase 2:  View Game Pages

## Rails
### Models
* Game
* Shelf
* Shelving

### Controllers
* Api::GamesController (show, index)
* Api:ShelvesController

### Views
* games/index.json.jbuilder
* games/show.json.jbuilder
* games/\_game.json.jbuilder
* shelves/show.json.jbuilder
* shelves/\_shelf.json.jbuilder

## Backbone
### Models
* Shelf
* Game

### Collections
* Games

### Views
* ShelfShowShort
* GamesIndexShort
* GameShow

### Additional Templates
* Navbar
* SearchBar
* GameItemShort

## Gems/Libraries
* Filepicker
