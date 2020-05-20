class Api::UsersController < ApplicationController

    def find
        @user = User.find_by(email: params[:user][:email])
        if @user
            render json: @user
        else
            @errors = @user.errors.full_messages
            render json: @errors
        end
    end

    def create
        @user = User.create(email: params[:user][:email], first_name: params[:user][:first_name], password: params[:user][:password])
        render json: @user
    end

    def index
        render json: User.all
    end


    private

    def set_user
        @user = User.find_by(id: params[:id])
    end

end