json.extract! @shelving, :id, :game_id, :shelf_id
json.game do
  json.partial! @game, partial: "api/games/game", as: :game, tree: false
end
json.shelf do
  json.partial! @shelf, partial: "api/shelves/shelf", as: :shelf, tree: false
end
