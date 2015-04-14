json.partial! 'api/ratings/rating', rating: rating
json.user do
  json.partial! 'api/users/user', user: rating.user, tree: false
end
