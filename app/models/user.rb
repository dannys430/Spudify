# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  name            :string           not null
#  username        :string           not null
#  birth_date      :date             not null
#  gender          :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  validates :email, presence: true, uniqueness: true, format: {with: URI::MailTo::EMAIL_REGEXP} 
  validates :password_digest, presence: true
  validates :session_token, presence: true, uniqueness: true
  validates :name, presence: true
  validates :username, presence: true, uniqueness: true
  validates :birth_date, presence: true
  validates :gender, inclusion: {in: ['Male', 'Female', 'Non-binary']}
  after_initialize :ensure_username
  after_initialize :ensure_session_token
  validates :password, length: {minimum: 6}, allow_nil: true
  attr_reader :password

  
  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return user && user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end 

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.generate_username
    SecureRandom::urlsafe_base64(24)
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save
    self.session_token
  end
  
  def ensure_username
    unless self.username
      self.username = self.class.generate_username
    end
  end

  def ensure_session_token
    unless self.session_token
      self.session_token = self.class.generate_session_token
    end
  end
  
end
