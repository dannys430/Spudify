class Api::PlaylistsController < ApplicationController

  before_action :ensure_signed_in

  def create
    # @playlist = Playlist.new(playlist_params)
    @playlist = current_user.playlists.new(playlist_params)
    if @playlist.save
      render 'api/playlists/show'
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  def index
    # debugger
    @playlists = current_user.playlists.includes(:songs) # adding 'includes' here preloads the association, removing n+1 queries.
    # render 'api/playlists/index'
    render :index
  end

  def show
    @playlist = Playlist.find(params[:id])
    # render 'api/playlists/show'
    render :show
  end

  def update
  end

  def destroy
  end

  def playlist_params
    params.require(:playlist).permit(:playlist_name, :description, :private)
  end
  
end
