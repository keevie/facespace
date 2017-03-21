class AddIndexToSessions < ActiveRecord::Migration[5.0]
  def change
    add_index :sessions, :session_token
  end
end
