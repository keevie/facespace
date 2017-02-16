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

class User < ApplicationRecord
  validates :email, :session_token, presence: true, uniqueness: true
  validates :f_name, :l_name, :dob, :password_digest, presence: true
  validates :password, length: { minimum: 8, allow_nil: true }
  validates :profile_url, uniqueness: true

  has_attached_file :profile, default_url: 'missing.png'
  has_attached_file :cover, default_url: 'missing.png'
  validates_attachment_content_type :profile, content_type: /\Aimage\/.*\Z/
  validates_attachment_content_type :cover, content_type: /\Aimage\/.*\Z/

  attr_reader :password

  after_initialize :ensure_session_token


  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)

    return :no_user if user.nil?
    user.is_password?(password) ? user : :wrong_pass
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
    password
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end
