class AddDesignerToGames < ActiveRecord::Migration
  def change
    add_column :games, :designer, :string
  end
end
