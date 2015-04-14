json.partial! 'api/ratings/rating', rating: rating
json.game do
  json.partial! 'api/games/game', game: rating.game, tree: false
end
