@playlists.each do |playlist|
  json.set! playlist.id do
  
    json.extract! playlist, :id, :playlist_name, :user

    
    json.songs do
      json.array! playlist.songs.each do |song|
        # json.set! song.id do                                    # vv this is making expensive aws requests, make sure comment out
          json.extract! song, :id, :song_name, :artist, :album #, :song_file
          # json.songUrl url_for(song.song_file)

          if Rails.application.assets.find_asset("#{song.song_name.split(' ').join('_')}.mp3") != nil
            json.songUrl asset_url("#{song.song_name.split(' ').join('_')}.mp3")
          end

          if Rails.application.assets.find_asset("#{song.album.album_name.split(' ').join('_')}") != nil
            json.coverArtUrl image_url("#{song.album.album_name.split(' ').join('_')}")
          end

        # end
      end
    end

  end
end






#@playlists.each do |playlist|
#  json.set! playlist.id do
#    json.extract! playlist, :id, :playlist_name, :user, :songs
#
#    playlist.songs.each do |song|
#      json.extract! song, :song_name, :artist
#    end
#  end
#  
#end
