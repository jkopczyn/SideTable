class Shelf < ActiveRecord::Base
  validates :user_id, :title, presence: true

  has_many :shelvings
  has_many :games, through: :shelvings, source: :game
  belongs_to :user
end
