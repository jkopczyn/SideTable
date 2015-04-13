class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :game_id, null: false
      t.text :body, null: false

      t.timestamps null: false
    end

    add_index :reviews, [:user_id, :game_id], unique: true
    add_index :reviews, :game_id
  end
end
