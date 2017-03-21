# == Schema Information
#
# Table name: sessions
#
#  id              :integer          not null, primary key
#  user_id         :integer          not null
#  http_user_agent :string
#  ip_address      :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  session_token   :string           not null
#

class Session < ApplicationRecord
  validates :session_token, presence: true, uniqueness: true
  validates :user_id, presence: true, uniqueness: true
end
