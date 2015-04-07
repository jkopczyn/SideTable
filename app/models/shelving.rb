class Shelving < ActiveRecord::Base
  belongs_to :game
  belongs_to :shelf
end
