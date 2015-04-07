class CreateShelves < ActiveRecord::Migration
  def change
    create_table :shelves do |t|
      t.string :title, null: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end
    add_index :shelves, :user_id
  end
end
