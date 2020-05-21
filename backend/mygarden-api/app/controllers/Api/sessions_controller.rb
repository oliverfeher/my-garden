class Api::SessionsController < ApplicationController
    
    def authenticate
        # binding.pry
        @user = User.find_by(email: user_params[:email])
        
        
        if @user && @user.authenticate(user_params[:password])
            # ENCODE JWT TOKEN WITH USER_ID AND SECRET KEY
            token = JWT.encode({user_id: @user.id}, "t3sts3cr3t")
            render json: {
                token: token
            }
        else
            render json: {
                error: "Invalid creditentials!"
            }
        end
    end


    private

    def user_params
        params.require(:user).permit(:email, :password, :first_name)
    end
    


end
