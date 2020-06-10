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
    @playlists = current_user.playlists
    render 'api/playlists/index'
  end

  def show
    @playlist = Playlist.find(params[:id])
    render 'api/playlists/show'
  end

  def update
  end

  def destroy
  end

  def playlist_params
    params.require(:playlist).permit(:playlist_name, :description, :private)
  end
  
end
