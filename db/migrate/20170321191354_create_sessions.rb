class CreateSessions < ActiveRecord::Migration[5.0]
  def change
    create_table :sessions do |t|
      t.integer :user_id, null: false
      t.string :http_user_agent
      t.string :ip_address

      t.timestamps
    end

    add_index :sessions, :user_id
  end
end
