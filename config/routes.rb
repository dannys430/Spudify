Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:new, :create, :index, :show, :edit, :update, :destroy]
  
    resource :session, only: [:new, :create, :destroy]

    resources :playlists, only: [:create, :index, :show, :update, :destroy] do
      post "/addsong/:song_id/", to: "playlists#add_song"
      # delete "/addsong/:song_id/", to: "playlists#add_song"
    end

    resources :songs, only: [:create, :index, :show, :destroy]

    resources :albums, only: [:index, :show]

    resources :artists, only: [:index, :show]
    
  end



end
