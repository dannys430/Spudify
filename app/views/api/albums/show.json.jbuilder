json.extract! @album, :id, :album_name, :year, :artist

if Rails.application.assets.find_asset("#{@album.album_name.split(' ').join('_')}") != nil
  json.coverArtUrl image_url("#{@album.album_name.split(' ').join('_')}")
end

json.songs do 
  json.array! @album.songs.each do |song|
    json.extract! song, :id, :song_name, :artist, :album
    
    # json.songUrl url_for(song.song_file)
    if Rails.application.assets.find_asset("#{song.song_name.split(' ').join('_')}.mp3") != nil
      json.songUrl asset_url("#{song.song_name.split(' ').join('_')}.mp3")
    end

    if Rails.application.assets.find_asset("#{@album.album_name.split(' ').join('_')}") != nil
      json.coverArtUrl image_url("#{@album.album_name.split(' ').join('_')}")
    end

  end
end