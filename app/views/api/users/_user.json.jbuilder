json.extract! user, :id, :name, :email
json.shelves do
  json.array! user.shelves, partial: 'api/shelves/shelf/', 
    as: :shelf, tree: tree
end
