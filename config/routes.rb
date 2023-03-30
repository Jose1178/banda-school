Rails.application.routes.draw do
  resources :fees
  resources :course_units
  resources :units, only: [:index]
  resources :courses, only: [:index, :show]
  resources :admins
  resources :students, only: [:create, :update, :show]
  post "/login", to: "sessions#create"
  get "/me", to: "students#logged_in"
  delete "/logout", to: "sessions#destroy"
  get "/adminme", to: "admins#logged_in"
end
