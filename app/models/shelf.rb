class Shelf < ActiveRecord::Base
  validates :user_id, :title, presence: true

  has_many :shelvings
  belongs_to :user
end
