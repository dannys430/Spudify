Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:new, :create, :index, :show, :edit, :update, :destroy]
  
    resource :session, only: [:new, :create, :destroy]

    resources :playlists, only: [:create, :index, :show, :update, :destroy] 

    resources :songs, only: [:create, :index, :show, :destroy]

    resources :albums, only: [:show]

    resources :artists, only: [:show]
    
  end



end
