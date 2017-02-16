class AddAttachmentProfileToUsers < ActiveRecord::Migration
  def self.up
    change_table :users do |t|
      t.attachment :profile
      t.attachment :cover
    end

    remove_column :users, :prof_image_url
    remove_column :users, :cover_image_url
  end

  def self.down
    remove_attachment :users, :profile
    remove_attachment :users, :cover
    add_column :users, :prof_image_url, :string
    add_column :users, :cover_image_url, :string

  end
end
