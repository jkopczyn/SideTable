json.extract! shelf, :id, :title, :user_id
json.games do
  json.array! shelf.games, partial: 'api/games/game', as: :game
end
