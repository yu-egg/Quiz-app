Rails.application.routes.draw do
  get 'quizes/index'
  root to: "quizes#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end