class ChangeNameOfRatingScore < ActiveRecord::Migration
  def change
    rename_column :ratings, :rating, :score
  end
end
