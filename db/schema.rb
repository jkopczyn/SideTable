# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150408182150) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "games", force: :cascade do |t|
    t.string   "title",       null: false
    t.string   "image_url"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.string   "designer"
    t.text     "description"
  end

  add_index "games", ["title"], name: "index_games_on_title", using: :btree

  create_table "shelves", force: :cascade do |t|
    t.string   "title",      null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "shelves", ["user_id"], name: "index_shelves_on_user_id", using: :btree

  create_table "shelvings", force: :cascade do |t|
    t.integer  "shelf_id",   null: false
    t.integer  "game_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "shelvings", ["game_id"], name: "index_shelvings_on_game_id", using: :btree
  add_index "shelvings", ["shelf_id", "game_id"], name: "index_shelvings_on_shelf_id_and_game_id", unique: true, using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "password_digest"
    t.string   "email",           null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "name"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree

end
