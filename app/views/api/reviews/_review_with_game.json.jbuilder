json.extract! review, :id, :body, :game_id, :user_id
json.game do
  json.partial! 'api/games/game', game: review.game, tree: false
end
