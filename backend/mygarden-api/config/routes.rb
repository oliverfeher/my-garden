Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # /api/ for routing the api path
  namespace :api do 
    resources :users do
      delete "/plants/:plant_id", to: "plants#destroy"
      post "/plant", to: "plants#create"
      patch "/plants/:plant_id", to: "plants#update"
    end
    post "/login", to: "sessions#authenticate"
    post "/authorize", to: "sessions#authorize"
  end

end
