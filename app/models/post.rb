# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  body       :text             not null
#  wall_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ApplicationRecord
  validates :body, presence: true
  validates :author, presence: true
  validates :wall, presence: true

  belongs_to :author,
    class_name: :User,
    primary_key: :id,
    foreign_key: :user_id

  belongs_to :wall,
    class_name: :User,
    primary_key: :id,
    foreign_key: :wall_id
end
