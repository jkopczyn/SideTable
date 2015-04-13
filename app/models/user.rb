class User < ActiveRecord::Base
  validates :email, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  after_initialize :ensure_session_token

  has_many :shelves, dependent: :destroy, inverse_of: :user
  has_many :games, through: :shelves
  has_many :reviews, dependent: :destroy, inverse_of: :user
  has_many :ratings, dependent: :destroy, inverse_of: :user

  attr_reader :password
  validates :password, length: {minimum: 6, allow_nil: true }

  def self.find_by_credentials(email, password)
    cand = self.find_by_email(email)
    if cand and cand.is_password?(password)
      return cand
    else
      return nil
    end
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def self.new_guest
    return User.find(1);
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    save!
    session_token
  end

  def password=(plaintext_password)
    self.password_digest = BCrypt::Password.create(plaintext_password)
    @password = plaintext_password
  end

  def is_password?(plaintext_password)
    password_digest.is_password?(plaintext_password)
  end

  def password_digest
    BCrypt::Password.new(super)
  end

  def guest?
    false
  end

  private
  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

end
