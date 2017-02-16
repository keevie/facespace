# == Schema Information
#
# Table name: users
#
#  id                   :integer          not null, primary key
#  email                :string           not null
#  f_name               :string           not null
#  l_name               :string           not null
#  dob                  :date             not null
#  location             :string
#  password_digest      :string           not null
#  session_token        :string           not null
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#  gender               :string
#  profile_file_name    :string
#  profile_content_type :string
#  profile_file_size    :integer
#  profile_updated_at   :datetime
#  cover_file_name      :string
#  cover_content_type   :string
#  cover_file_size      :integer
#  cover_updated_at     :datetime
#  profile_url          :string
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
