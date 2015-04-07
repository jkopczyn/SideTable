class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :title, null: false
      t.string :image_url

      t.timestamps null: false
    end

    add_index :games, :title
  end
end
