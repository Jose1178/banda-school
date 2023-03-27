Rails.application.routes.draw do
  resources :course_units
  resources :units
  resources :courses
  resources :admins
  resources :students
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
