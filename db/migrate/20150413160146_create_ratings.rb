class CreateRatings < ActiveRecord::Migration
  def change
    create_table :ratings do |t|
      t.integer :user_id, null: false
      t.integer :game_id, null: false
      t.integer :rating, null: false

      t.timestamps null: false
    end
    add_index :ratings, [:user_id, :game_id], unique: true
    add_index :ratings, :game_id
  end
end
