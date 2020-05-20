Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # /api/ for routing the api path
  namespace :api do 
    resources :users
    post 'user_token' => 'user_token#create'
    post "find_user" => "users#find"
  end
end
