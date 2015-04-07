# Phase 5: Searching for Blogs and Posts

## Rails
### Models
Tags
Taggings

### Controllers
Api:TagsController (create, show, index)
Api:TaggingsController (create, destroy, update, index)

### Views
games/index.json.jbuilder (add search by tags)
tags/\_tags.json.jbuilder (used by games association)
tags/index.json.jbuilder

## Backbone
### Models
Tag

### Collections
Tags

### Views
* GameShow (update to include tags and tag creation)
* GameIndex (update to include search options)

## Gems/Libraries
