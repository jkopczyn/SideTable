# Phase 5: Searching for Blogs and Posts

## Rails
### Models
Friendship

### Controllers
Api::FriendshipsController (create, update, destroy, show, index)
Api:UsersController (update, show)

### Views
users/show.json.jbuilder (include friendships)
friendships/\_friendship.json.jbuilder
friendships/index.json.jbuilder
friendships/show.json.jbuilder

## Backbone
### Models
Friendship

### Collections
Friendships

### Views
* UserShow
* UserForm
* UsersIndex
* UserIndexItem

## Gems/Libraries
* Filepicker
