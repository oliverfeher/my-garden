class Api::SessionsController < ApplicationController
    
    def authenticate
        @user = User.find_by(user_email)
        render json: @user
    end


    private

    def user_email
        params.require(:user).permit(:email)
    end
end
