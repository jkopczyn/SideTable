class Review < ActiveRecord::Base
  belongs_to :user
  belongs_to :game
  
  validates :user, :game, :body, presence: true
  validates :user, uniqueness: {scope: :game}
  validates :game, uniqueness: {scope: :user}
end
