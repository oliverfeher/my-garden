class User < ApplicationRecord
    # KNOCK plus password encrypton
    has_secure_password

    # Validations
    validates :first_name, presence: true
    validates :email, uniqueness: true, presence: true
    validates :password_digest, presence: true

end