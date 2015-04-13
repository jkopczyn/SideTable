json.extract! @shelving, :id, :game_id, :shelf_id
json.game @game, partial: "api/games/game", as: :game
json.shelf @shelf, partial: "api/shelves/shelf", as: :game
