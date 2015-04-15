class Rating < ActiveRecord::Base
  belongs_to :user
  belongs_to :game
  
  validates :user, :game, :score, presence: true
  validates :user, uniqueness: {scope: :game}
  validates :game, uniqueness: {scope: :user}
  validates :score, inclusion: { in: (1..50) }
  #stores a five-star rating with decimals; 1 => 0.1, 50 => 5.0
end
