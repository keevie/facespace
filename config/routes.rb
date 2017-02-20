Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update]
    resources :posts, only: [:create, :update, :destroy]
    resource :session, only: [:create, :destroy]
  end

  get '*path', to: 'static_pages#root'
end
