json.extract! game, :id, :title, :designer, :image_url, :description

if tree
  json.reviews do
    json.array! game.reviews.includes(:user), partial: "api/reviews/review_with_user", as:
    :review, tree: false
  end
end
json.ratings do
  json.array! game.ratings.includes(:user), partial: "api/ratings/rating_with_user", as:
  :rating, tree: false
end

