json.extract! rating, :id, :rating, :game_id, :user_id
json.game do
  json.partial! 'api/games/game', game: rating.game, tree: false
end
