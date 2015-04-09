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
* Shelves

### Views
* ShelfShowShort
* ShelfShowLong
* GamesIndexShort
* GameShow
* GameItemShort
* GameItemLong
* Navbar
* SearchBar

## Gems/Libraries
* Filepicker
