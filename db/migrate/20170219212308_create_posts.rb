class CreatePosts < ActiveRecord::Migration[5.0]
  def change
    create_table :posts do |t|
      t.integer :user_id, null: false
      t.text :body, null: false
      t.integer :wall_id, null: false

      t.timestamps
    end
    add_index :posts, :user_id
    add_index :posts, :wall_id
  end
end
