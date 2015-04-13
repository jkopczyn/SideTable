json.extract! rating, :id, :rating, :game_id, :user_id
json.user do
  json.partial! 'api/users/user', user: rating.user, tree: false
end
json.game do
  json.partial! 'api/games/game', game: rating.game, tree: false
end
