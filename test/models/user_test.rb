# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  f_name          :string           not null
#  l_name          :string           not null
#  dob             :date             not null
#  location        :string
#  password_digest :string           not null
#  session_token   :string           not null
#  prof_image_url  :string
#  cover_image_url :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
