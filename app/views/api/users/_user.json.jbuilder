json.extract! user, :id, :name, :email
if tree
  json.shelves do
    json.array! user.shelves, partial: 'api/shelves/shelf/', 
      as: :shelf, tree: true
  end
end
