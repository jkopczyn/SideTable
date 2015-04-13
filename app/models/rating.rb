class Rating < ActiveRecord::Base
  belongs_to :user
  belongs_to :game
  
  validates :user, :game, :rating, presence: true
  validates :user, uniqueness: {scope: :game}
  validates :game, uniqueness: {scope: :user}
end
