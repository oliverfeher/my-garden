class User < ApplicationRecord
    has_secure_password
    has_many :plants

    # Validations
    validates :first_name, presence: true
    validates :email, uniqueness: true, presence: true
    validates :password_digest, presence: true

end