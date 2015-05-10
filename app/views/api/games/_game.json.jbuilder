json.extract! game, :id, :title, :designer, :image_url, 
                    :description
if @total_pages
  json.page @page
  json.total_pages @total_pages
end

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

