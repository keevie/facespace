# == Schema Information
#
# Table name: friendships
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  friend_id  :integer          not null
#  pending    :boolean          default("true")
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Friendship < ApplicationRecord
  validates :user_id, :friend_id, presence: true

  belongs_to :user,
    class_name: :User,
    foreign_key: :user_id,
    primary_key: :id

  belongs_to :friend,
    class_name: :User,
    foreign_key: :friend_id,
    primary_key: :id


end
