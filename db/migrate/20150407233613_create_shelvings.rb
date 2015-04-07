class CreateShelvings < ActiveRecord::Migration
  def change
    create_table :shelvings do |t|
      t.integer :shelf_id, null:false
      t.integer :game_id, null:false

      t.timestamps null: false
    end
    add_index :shelvings, [:shelf_id, :game_id], unique: true
    add_index :shelvings, :game_id
  end
end
