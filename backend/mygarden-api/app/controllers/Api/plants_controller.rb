class Api::PlantsController < ApplicationController

    def create
        binding.pry
        @user = User.find_by(id: params[:user_id])
        # @user.plants.create()
    end
end