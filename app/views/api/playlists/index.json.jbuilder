@playlists.each do |playlist|
  json.set! playlist.id do
  
    json.extract! playlist, :id, :playlist_name, :user

    
    json.songs do
      json.array! playlist.songs.each do |song|
        # json.set! song.id do
          json.extract! song, :id, :song_name, :artist, :album, :song_file
          json.songUrl url_for(song.song_file)
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
