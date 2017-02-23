# == Schema Information
#
# Table name: comments
#
#  id               :integer          not null, primary key
#  body             :text             not null
#  commentable_type :string           not null
#  commentable_id   :integer          not null
#  parent_id        :integer
#  author_id        :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Comment < ApplicationRecord
  validates :author, presence: true
  validates :body, presence: true


  belongs_to :commentable, polymorphic: true

  belongs_to :author,
    class_name: :User,
    primary_key: :id,
    foreign_key: :author_id


  has_many :children,
    class_name: :Comment,
    primary_key: :id,
    foreign_key: :parent_id
end
