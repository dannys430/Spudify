json.extract! @album, :id, :album_name, :year, :artist

if @album.cover_art.attached?
  json.coverArtUrl url_for(@album.cover_art)
end

json.songs do 
  json.array! @album.songs.each do |song|
    json.extract! song, :id, :song_name, :artist, :album
    
    if song.song_file.attached?
      json.songUrl url_for(song.song_file)
    end

    if song.album.cover_art.attached?
      json.coverArtUrl url_for(song.album.cover_art)
    end

  end
end