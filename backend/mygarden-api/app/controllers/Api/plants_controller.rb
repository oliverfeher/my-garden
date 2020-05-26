class Api::PlantsController < ApplicationController

    def create
        @user = User.find_by(id: params[:user_id])
        @user.plants.create(name: params[:plant][:name], days_to_harvest: params[:plant][:days], plant_date: params[:plant][:date])
        render json: @user.to_json(:include => [:plants])
    end

    def destroy
        @user = User.find_by(id: params[:user_id])
        plant = Plant.find_by(id: params[:plant_id])
        plant.destroy
        render json: @user.to_json(:include => [:plants])
    end

    def update
        binding.pry
    end
end