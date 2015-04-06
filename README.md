# Flux-capacitr

[Heroku link][heroku]

[heroku]: http://flux-capacitr.herokuapp.com

## Minimum Viable Product
Flux-capacitr is a clone of Tumblr built on Rails and Backbone. Users can:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] View game details with ratings and reviews
- [ ] Search for games by name
- [ ] Create Accounts
- [ ] Log In
- [ ] Add games to their collection
- [ ] Rate games
- [ ] Review games
- [ ] Search for users
- [ ] View user profiles
- [ ] Add friends

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: View Game Pages (~1 day)
I will implement a bare-bones index of all games in Rails, and add API routes
for game data and Backbone show views for the games in the database. I will 
push the app to Heroku and ensure that everything works before moving on.

[Details][phase-one]

### Phase 2: Search by Name (~1.5 days)
I will implement API routes to fetch and query game data in JSON, then add 
Backbone models and collections to request and fetch that data as DOM pages.
By the end of this phase, users will be able to query games by name and
browse results, all within a single Backbone app.

[Details][phase-two]

### Phase 3: User Accounts and Authentication (~ 2.5 days)
I will implement users and session authentication in Rails, based on the
practices and patterns learned at App Academy, and allow users to create
personal game collections and add games to them. By the end of this phase, users
will be able to store and modify collections of games.

[Details][phase-three]

### Phase 4: Rate and Review Games (~2 days)
I will implement the ability for users to leave ratings and reviews on
games; these will be backed by join tables between Users and Games and
have standard REST routes. On the Backbone side, these subviews will appear
as part of the game Show and Item views. Additionally, the game Show
page will show a list of reviews and an aggregate rating, and the Item
view will show the aggregate rating.


[Details][phase-four]

### Phase 5: Search users, add friends, and view profiles (~ 3 days)
I will create a profile view for each user including a profile image
(using the Filepicker library) and personal description. A form subview to 
change these will be linked, and a small form to add the user as a friend. The 
user's collection view (used in the home page) will also appear. Additionally,
I will create a page to view each user's friend list linked from their profile;
each user will appear with username, small picture, and link to their profile.

[Details][phase-five]

### Bonus Features 
#### Highly desirable features: 

- [ ] Add games to database
- [ ] Search for games by tags
- [ ] Add tags to games
- [ ] Search for games by designer
- [ ] List of recommended games
- [ ] Sort user's collections into multiple lists

#### Non-core features:

- [ ] Display friend notifications
- [ ] Compare friend's collection with your own
- [ ] Display notifications for other activity
- [ ] Intelligent recommendations

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md

