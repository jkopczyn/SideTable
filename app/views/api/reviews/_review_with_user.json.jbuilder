json.extract! review, :id, :body, :game_id, :user_id
json.user do
  json.partial! 'api/users/user', user: review.user, tree: false
end
