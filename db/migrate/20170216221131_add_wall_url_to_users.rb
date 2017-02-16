class AddWallUrlToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :profile_url, :string
    add_index :users, :profile_url, unique: :true
  end
end
