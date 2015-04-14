class Game < ActiveRecord::Base
  validates :title, presence: true
  has_many :shelvings, inverse_of: :game
  has_many :shelves, through: :shelvings
  has_many :users, through: :shelves
  has_many :ratings, inverse_of: :game, dependent: :destroy
  has_many :reviews, inverse_of: :game, dependent: :destroy
  #has_many :taggings
  #has_many :tags, through: :taggings
end
