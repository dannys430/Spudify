@playlists.each do |playlist|
  json.set! playlist.id do
  
    json.extract! playlist, :id, :playlist_name, :user

    if playlist.playlist_photo.attached?
      json.playlistPhotoUrl url_for(playlist.playlist_photo)
    end
    
    json.songs do
      json.array! playlist.songs.each do |song|
        #json.set! song.id do                                    # vv this is making expensive aws requests, make sure comment out
          json.extract! song, :id, :song_name, :artist, :album #:song_file
          
          if song.song_file.attached?
            json.songUrl url_for(song.song_file)
          end

          if song.album.cover_art.attached?
            json.coverArtUrl url_for(song.album.cover_art)
          end

        #end
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
