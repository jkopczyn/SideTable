json.extract! shelf, :id, :title, :user_id
if tree
  json.games do
    json.array! shelf.games, partial: 'api/games/game', as: :game, tree: true
  end
end
