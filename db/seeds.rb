User.create!([
  {session_token: "kD4FXnOyP8pro8wMPCYTmQ", password_digest: "$2a$10$qftgE00xqTU8zlsPvrA72eyNUc3sZLbF3b0E1QvqrnuJSDkQ13sOC", email: "foo@gmail.com", name: "Jacob Kopczynski"},
  {session_token: "VnWv0Psi3g_DrGsbkkM4PA", password_digest: "$2a$10$1/NdWw78/EHM5b3J2Kdxi.iyrmrBQ1njzLH0w28/dC39kMffqxCtW", email: "bar@gmail.com", name: "John Doe"}
])
Game.create!([
  {title: "Zaibatsu", image_url: "http://germainekoh.com/league/blog/wp-content/uploads/2013/12/boardgames.jpg", designer: "Jacob Kopczynski", description: "A fast-paced auction game for 2-4 players"},
  {title: "Firefly", image_url: "http://a.tgcdn.net/images/products/additional/large/1263_firefly_board_game_setup.jpg", designer: nil, description: "\"Find a job. Find a crew. Keep Flying.\" Based on the cult science fiction television show."},
  {title: "Memeopoly", image_url: "http://gadgetsin.com/uploads/2011/03/memeopoly_internet_themed_monopoly_board_game.jpg", designer: "Anonymous", description: "It's from the Internet. Just be glad it won't try to label your cats."},
  {title: "Alien Frontiers", image_url: "http://www.gamesalute.com/sites/default/files/styles/game_page_slider/public/af_boxfront_0.jpg?itok=-ZHBFRkS", designer: "Tory Niemann", description: "Do you have what it takes to be a deep space colonist? An alien frontier awaits the brave and daring! This new planet will be harsh, but if you have the skills to manage your resources, build a fleet, research alien life, and settle colonies, the world can be yours. Alien Frontiers is a game of resource management and planetary development for two to four players. During the game you will utilize orbital facilities and alien technology to build colony domes in strategic locations to control the newly discovered world. The game board shows the planet, its moon, the stations in orbit around the planet, and the solar system’s star. The dice you are given at the start of the game represent the space ships in your fleet. You will assign these ships to the orbital facilities in order to earn resources, expand your fleet, and colonize the planet. As the game progresses, you will place your colony tokens on the planet to represent the amount of control you have over each territory. Those territories exert influence over specific orbital facilities and, if you control a territory, you are able to utilize that sway to your advantage. The planet was once the home of an alien race and they left behind a wondrous artifact in orbit. Using your fleet to explore the artifact, you will discover amazing alien technologies that you can use to advance your cause. Winning the game will require careful consideration as you assign your fleet, integrate the alien technology and territory influences into your expansion plans, and block your opponents from building colonies of their own. Do you have what it takes to conquer an alien frontier? Roll and place your dice to gain advantages over your opponent and block them out of useful areas of the board. Use Alien Tech cards to manipulate your dice rolls and territory bonuses to break the rules. Steal resources, overtake territories, and do whatever it takes to get your colonies on the map first! Don't dream it'll be easy, though, because the other players will be trying to do the same thing."},
])
Rating.create!([
  {user_id: 1, game_id: 1, score: 50},
  {user_id: 1, game_id: 2, score: 50},
  {user_id: 1, game_id: 3, score: 1},
  {user_id: 1, game_id: 4, score: 36},
])
Review.create!([
  {user_id: 1, game_id: 1, body: "Best game ever. Would play a million times. 6/5."},
  {user_id: 2, game_id: 1, body: "Wonderful. 5/5."},
  {user_id: 1, game_id: 2, body: "Best game ever. Would play until the world was used up. 5/5."},
  {user_id: 1, game_id: 3, body: "LOL would not recommend to my worst enemy"},
  {user_id: 2, game_id: 2, body: "Very nice components, but bland gameplay. 3/5."},
  {body: "The theme is loose but really fun (everything is named after old Sci Fi authors; consider it a reading list), and the dice-based worker placement mechanic was wonderfully innovative the first time I saw it, and tons of fun. The game takes a little longer than it really needs to, and I don't recommend the expansions, but would absolutely recommend this as a second or third strategic game for a fairly new gamer.", game_id: 4, user_id: 1}
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
