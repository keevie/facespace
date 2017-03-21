class AddSessionTokenToSessions < ActiveRecord::Migration[5.0]
  def change
    add_column :sessions, :session_token, :string, null: false
  end
end
