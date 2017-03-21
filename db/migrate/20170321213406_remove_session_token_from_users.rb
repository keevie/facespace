class RemoveSessionTokenFromUsers < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :session_token, :string
  end
end
