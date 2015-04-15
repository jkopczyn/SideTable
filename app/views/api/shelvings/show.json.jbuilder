json.extract! @shelving, :id, :game_id, :shelf_id
json.game do
  json.extract! @shelving.game, :id, :title, :designer, :image_url, :description
end
json.shelf do
  json.extract! @shelving.shelf, :id, :title, :user_id
end
