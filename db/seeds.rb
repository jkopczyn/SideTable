Game.create!([
  {title: "Firefly", image_url: "http://a.tgcdn.net/images/products/additional/large/1263_firefly_board_game_setup.jpg", designer: nil},
  {title: "Zaibatsu", image_url: "http://germainekoh.com/league/blog/wp-content/uploads/2013/12/boardgames.jpg", designer: "Jacob Kopczynski"},
  {title: "Memeopoly", image_url: "http://gadgetsin.com/uploads/2011/03/memeopoly_internet_themed_monopoly_board_game.jpg", designer: "Anonymous"}
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
User.create!([
  {session_token: "2vst61OUojZmEMaIRQFhKg", password_digest: "$2a$10$1/NdWw78/EHM5b3J2Kdxi.iyrmrBQ1njzLH0w28/dC39kMffqxCtW", email: "bar@gmail.com", name: "John Doe"},
  {session_token: "5nvIdE8MArHJzLwVAH0tdg", password_digest: "$2a$10$qftgE00xqTU8zlsPvrA72eyNUc3sZLbF3b0E1QvqrnuJSDkQ13sOC", email: "foo@gmail.com", name: "Jacob Kopczynski"}
])
