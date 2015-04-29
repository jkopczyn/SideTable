User.create!([
  {session_token: "gcAdUzsOVgChdYibDLfRKg", password_digest: "$2a$10$1/NdWw78/EHM5b3J2Kdxi.iyrmrBQ1njzLH0w28/dC39kMffqxCtW", email: "bar@gmail.com", name: "John Doe"},
  {session_token: "Ln5FRzNZ2FUz8IQJjbEn5w", password_digest: "$2a$10$qftgE00xqTU8zlsPvrA72eyNUc3sZLbF3b0E1QvqrnuJSDkQ13sOC", email: "foo@gmail.com", name: "Jacob Kopczynski"}
])
Game.create!([
  {title: "Zaibatsu", image_url: "http://germainekoh.com/league/blog/wp-content/uploads/2013/12/boardgames.jpg", designer: "Jacob Kopczynski", description: "A fast-paced auction game for 2-4 players"},
  {title: "Firefly", image_url: "http://a.tgcdn.net/images/products/additional/large/1263_firefly_board_game_setup.jpg", designer: nil, description: "\"Find a job. Find a crew. Keep Flying.\" Based on the cult science fiction television show."},
  {title: "Memeopoly", image_url: "http://gadgetsin.com/uploads/2011/03/memeopoly_internet_themed_monopoly_board_game.jpg", designer: "Anonymous", description: "It's from the Internet. Just be glad it won't try to label your cats."},
  {title: "Alien Frontiers", image_url: "http://www.gamesalute.com/sites/default/files/styles/game_page_slider/public/af_boxfront_0.jpg?itok=-ZHBFRkS", designer: "Tory Niemann", description: "Do you have what it takes to be a deep space colonist? An alien frontier awaits the brave and daring! This new planet will be harsh, but if you have the skills to manage your resources, build a fleet, research alien life, and settle colonies, the world can be yours.\n\nAlien Frontiers is a game of resource management and planetary development for two to four players. During the game you will utilize orbital facilities and alien technology to build colony domes in strategic locations to control the newly discovered world.\n\nThe game board shows the planet, its moon, the stations in orbit around the planet, and the solar system’s star. The dice you are given at the start of the game represent the space ships in your fleet. You will assign these ships to the orbital facilities in order to earn resources, expand your fleet, and colonize the planet.\n\nAs the game progresses, you will place your colony tokens on the planet to represent the amount of control you have over each territory. Those territories exert influence over specific orbital facilities and, if you control a territory, you are able to utilize that sway to your advantage.\n\nThe planet was once the home of an alien race and they left behind a wondrous artifact in orbit. Using your fleet to explore the artifact, you will discover amazing alien technologies that you can use to advance your cause.\n\nWinning the game will require careful consideration as you assign your fleet, integrate the alien technology and territory influences into your expansion plans, and block your opponents from building colonies of their own. Do you have what it takes to conquer an alien frontier?\n\nRoll and place your dice to gain advantages over your opponent and block them out of useful areas of the board. Use Alien Tech cards to manipulate your dice rolls and territory bonuses to break the rules. Steal resources, overtake territories, and do whatever it takes to get your colonies on the map first! Don't dream it'll be easy, though, because the other players will be trying to do the same thing."},
  {title: "Settlers of Catan", image_url: "http://www.mayfairgames.com/mfg-shop3/MFG3000-3099/large/MFG3061-cl.jpg", designer: "Klaus Teuber", description: "In Catan (formerly The Settlers of Catan), players try to be the dominant force on the island of Catan by building settlements, cities, and roads. On each turn dice are rolled to determine what resources the island produces. Players collect these resources (cards)—wood, grain, brick, sheep, or stone—to build up their civilizations to get to 10 victory points and win the game.
    
    Setup includes randomly placing large hexagonal tiles (each showing a resource or the desert) in a honeycomb shape and surrounding them with water tiles, some of which contain ports of exchange. Number disks, which will correspond to die rolls (two 6-sided dice are used), are placed on each resource tile. Each player is given two settlements (think: houses) and roads (sticks) which are, in turn, placed on intersections and borders of the resource tiles. Players collect a hand of resource cards based on which hex tiles their last-placed house is adjacent to. A robber pawn is placed on the desert tile.
    
    A turn consists of possibly playing a development card, rolling the dice, everyone (perhaps) collecting resource cards based on the roll and position of houses (or upgraded cities—think: hotels) unless a 7 is rolled, turning in resource cards (if possible and desired) for improvements, trading cards at a port, and trading resource cards with other players. If a 7 is rolled, the active player moves the robber to a new hex tile and steals resource cards from other players who have built structures adjacent to that tile.
    
    Points are accumulated by building settlements and cities, having the longest road and the largest army (from some of the development cards), and gathering certain development cards that simply award victory points. When a player has gathered 10 points (some of which may be held in secret), he announces his total and claims the win.
    
    Catan has won multiple awards and is one of the most popular games in recent history due to its amazing ability to appeal to experienced gamers as well as those new to the hobby."},
    {title: "Power Grid", image_url: "http://riograndegames.com/uploads/Game/Preview-1_5.jpeg", designer: "Friedemann Friese", description: "The object of Power Grid is to supply the most cities with power when someone's network gains a predetermined size. In this new edition, players mark pre-existing routes between cities for connection, and then bid against each other to purchase the power plants that they use to power their cities.
      
      However, as plants are purchased, newer, more efficient plants become available, so by merely purchasing, you're potentially allowing others access to superior equipment.
      
      Additionally, players must acquire the raw materials (coal, oil, garbage, and uranium) needed to power said plants (except for the 'renewable' windfarm/ solar plants, which require no fuel), making it a constant struggle to upgrade your plants for maximum efficiency while still retaining enough wealth to quickly expand your network to get the cheapest routes."},
  {title: "Smallworld", image_url: "http://www.blogcdn.com/www.tuaw.com/media/2010/05/small-world-01-630-1273190451.jpg", designer: "Philippe Keyaerts", description: "Small World is inhabited by a zany cast of characters such as dwarves, wizards, amazons, giants, orcs and even humans; who use their troops to occupy territory and conquer adjacent lands in order to push the other races off the face of the earth."},
])
Rating.create!([
  {user_id: 1, game_id: 2, score: 27},
  {user_id: 1, game_id: 3, score: 3},
  {user_id: 2, game_id: 1, score: 45},
  {user_id: 2, game_id: 2, score: 13},
  {user_id: 2, game_id: 3, score: 5},
  {user_id: 1, game_id: 4, score: 45},
  {user_id: 1, game_id: 1, score: 49},
])
Review.create!([
  {user_id: 1, game_id: 1, body: "Best game ever. Would play a million times. 6/5."},
  {user_id: 1, game_id: 3, body: "LOL would not recommend to my worst enemy"},
  {user_id: 1, game_id: 2, body: "Best game ever. Would play until the world was used up. 10/5."},
  {user_id: 2, game_id: 2, body: "Very nice components, but bland gameplay. 3/5."},
  {body: "The theme is loose but really fun (everything is named after old Sci Fi authors; consider it a reading list), and the dice-based worker placement mechanic was wonderfully innovative the first time I saw it, and tons of fun. The game takes a little longer than it really needs to, and I don't recommend the expansions, but would absolutely recommend this as a second or third strategic game for a fairly new gamer.", game_id: 4, user_id: 1}
])
Shelf.create!([
  {title: "Geeky Games", user_id: 2},
  {title: "Design Games", user_id: 2},
  {title: "Cool Games", user_id: 1},
  {title: "Terrible Games", user_id: 2},
  {title: "Test", user_id: 1},
  {title: "Working", user_id: 1},
])
Shelving.create!([
  {shelf_id: 1, game_id: 3},
  {shelf_id: 1, game_id: 2},
  {shelf_id: 2, game_id: 1},
  {shelf_id: 3, game_id: 1},
  {shelf_id: 2, game_id: 2},
  {shelf_id: 4, game_id: 3},
  {shelf_id: 3, game_id: 4},
  {shelf_id: 5, game_id: 4},
  {shelf_id: 6, game_id: 4},
  {shelf_id: 5, game_id: 1},
])

