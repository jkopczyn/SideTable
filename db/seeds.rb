User.create!([
  {session_token: "nHk0ULq5Vcv6FohjUz70LQ", password_digest: "$2a$10$qftgE00xqTU8zlsPvrA72eyNUc3sZLbF3b0E1QvqrnuJSDkQ13sOC", email: "foo@gmail.com", name: "Jacob Kopczynski"},
  {session_token: "RycQO2x5cbYvjM6KmOdHuw", password_digest: "$2a$10$1/NdWw78/EHM5b3J2Kdxi.iyrmrBQ1njzLH0w28/dC39kMffqxCtW", email: "bar@gmail.com", name: "John Doe"}
])
Game.create!([
  {title: "Zaibatsu", image_url: "http://germainekoh.com/league/blog/wp-content/uploads/2013/12/boardgames.jpg", designer: "Jacob Kopczynski", description: "A fast-paced auction game for 2-4 players"},
  {title: "Firefly", image_url: "http://a.tgcdn.net/images/products/additional/large/1263_firefly_board_game_setup.jpg", designer: nil, description: "\"Find a job. Find a crew. Keep Flying.\" Based on the cult science fiction television show."},
  {title: "Memeopoly", image_url: "http://gadgetsin.com/uploads/2011/03/memeopoly_internet_themed_monopoly_board_game.jpg", designer: "Anonymous", description: "It's from the Internet. Just be glad it won't try to label your cats."}
])
Rating.create!([
  {user_id: 1, game_id: 1, score: 5},
  {user_id: 1, game_id: 2, score: 5},
  {user_id: 1, game_id: 3, score: 1}
])
Review.create!([
  {user_id: 1, game_id: 1, body: "Best game ever. Would play a million times. 6/5."},
  {user_id: 1, game_id: 2, body: "Best game ever. Would play until the world was used up. 5/5."},
  {user_id: 1, game_id: 3, body: "LOL would not recommend to my worst enemy"}
])
Shelf.create!([
  {title: "Geeky Games", user_id: 2},
  {title: "Design Games", user_id: 2},
  {title: "Cool Games", user_id: 1}
])
Shelving.create!([
  {shelf_id: 1, game_id: 3},
  {shelf_id: 1, game_id: 2},
  {shelf_id: 2, game_id: 1},
  {shelf_id: 2, game_id: 3},
  {shelf_id: 3, game_id: 1}
])

