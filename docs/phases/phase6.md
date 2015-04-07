# Phase 6: Search users, add friends, and view profiles

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
* UserShow (to include more detail)
* UserForm
* UsersIndex
* UserIndexItem

## Gems/Libraries
