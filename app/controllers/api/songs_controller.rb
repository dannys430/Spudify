class Api::SongsController < ApplicationController

  def create
    @song = Song.new(song_params)
    if @song.save
      render json: ['song saved successfully']
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  def index
    @songs = Song.all
    render :index
  end

  def show
    @song = Song.find(params[:id])
    render :show
  end

  def destroy
  end

  def song_params
    params.require(:song).permit(:song_name, :year, :album_id, :explicit, :song_file)
  end
  
end
