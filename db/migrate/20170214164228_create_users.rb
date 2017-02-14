class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :f_name, null: false
      t.string :l_name, null: false
      t.date :dob, null: false
      t.string :location
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :prof_image_url
      t.string :cover_image_url

      t.timestamps
    end
    add_index :users, :email, unique: :true
    add_index :users, :session_token, unique: :true
    add_index :users, :f_name
    add_index :users, :l_name
  end
end
