json.extract! @shelf, :id, :title, :user_id
json.shelf do
  json.array! @shelf.games, partial: 'games/game', as: :game
end
