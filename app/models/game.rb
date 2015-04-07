class Game < ActiveRecord::Base
  validates :title, presence: true
  #has_many :ratings
  #has_many :reviews
  #has_many :taggings
  #has_many :tags, through: :taggings
end
