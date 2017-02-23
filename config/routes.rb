Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update]
    resources :posts, only: [:create, :update, :destroy]
    resources :comments, only: [:create, :show, :update, :destroy]
    resource :session, only: [:create, :destroy]
    match '/newsfeed', to: 'posts#newsfeed', via: :get
    match '/timeline', to: 'posts#timeline', via: :get
    post '/friendships/create', to: 'friendships#create'
    post '/friendships/accept', to: 'friendships#accept'
    post '/friendships/reject', to: 'friendships#reject'
    post '/friendships/cancel', to: 'friendships#cancel'
    delete '/friendships/destroy', to: 'friendships#destroy'
  end

  get '*path', to: 'static_pages#root'
end
