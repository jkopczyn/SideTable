class Game < ActiveRecord::Base
  validates :title, presence: true
  has_many :shelvings
  has_many :shelves, through: :shelvings
  has_many :users, through: :shelves
  #has_many :ratings
  #has_many :reviews
  #has_many :taggings
  #has_many :tags, through: :taggings
end
