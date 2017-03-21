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

ActiveRecord::Schema.define(version: 20170321213406) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.text     "body",             null: false
    t.string   "commentable_type", null: false
    t.integer  "commentable_id",   null: false
    t.integer  "parent_id"
    t.integer  "author_id",        null: false
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.index ["author_id"], name: "index_comments_on_author_id", using: :btree
    t.index ["commentable_type", "commentable_id"], name: "index_comments_on_commentable_type_and_commentable_id", using: :btree
    t.index ["parent_id"], name: "index_comments_on_parent_id", using: :btree
  end

  create_table "friendships", force: :cascade do |t|
    t.integer  "user_id",                   null: false
    t.integer  "friend_id",                 null: false
    t.boolean  "pending",    default: true
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
    t.index ["friend_id"], name: "index_friendships_on_friend_id", using: :btree
    t.index ["pending"], name: "index_friendships_on_pending", using: :btree
    t.index ["user_id"], name: "index_friendships_on_user_id", using: :btree
  end

  create_table "posts", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.text     "body",       null: false
    t.integer  "wall_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_posts_on_user_id", using: :btree
    t.index ["wall_id"], name: "index_posts_on_wall_id", using: :btree
  end

  create_table "sessions", force: :cascade do |t|
    t.integer  "user_id",         null: false
    t.string   "http_user_agent"
    t.string   "ip_address"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "session_token",   null: false
    t.index ["session_token"], name: "index_sessions_on_session_token", using: :btree
    t.index ["user_id"], name: "index_sessions_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                null: false
    t.string   "f_name",               null: false
    t.string   "l_name",               null: false
    t.date     "dob",                  null: false
    t.string   "location"
    t.string   "password_digest",      null: false
    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
    t.string   "gender"
    t.string   "profile_file_name"
    t.string   "profile_content_type"
    t.integer  "profile_file_size"
    t.datetime "profile_updated_at"
    t.string   "cover_file_name"
    t.string   "cover_content_type"
    t.integer  "cover_file_size"
    t.datetime "cover_updated_at"
    t.string   "profile_url"
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["f_name"], name: "index_users_on_f_name", using: :btree
    t.index ["l_name"], name: "index_users_on_l_name", using: :btree
    t.index ["profile_url"], name: "index_users_on_profile_url", unique: true, using: :btree
  end

end
