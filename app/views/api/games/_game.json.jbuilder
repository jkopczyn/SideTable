json.extract! game, :id, :title, :designer, :image_url, :description

if tree
  json.reviews do
    json.array! game.reviews, partial: "api/reviews/review", as:
    :review, tree: false
  end
  json.ratings do
    json.array! game.ratings, partial: "api/ratings/rating", as:
    :rating, tree: false
  end
end
