class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.text :body, null: false
      t.references :commentable, polymorphic: true, index: true, null: false
      t.integer :parent_id
      t.integer :author_id, null: false



      t.timestamps
    end

    add_index :comments, :parent_id
    add_index :comments, :author_id
  end
end
