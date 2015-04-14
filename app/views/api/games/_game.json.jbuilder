json.extract! game, :id, :title, :designer, :image_url, :description

if tree
  json.reviews do
    json.array! game.reviews, partial: "api/reviews/review_with_user", as:
    :review, tree: false
  end
  json.ratings do
    json.array! game.ratings, partial: "api/ratings/rating_with_user", as:
    :rating, tree: false
  end
end
