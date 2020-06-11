@playlists.each do |playlist|
  json.set! playlist.id do
    json.extract! playlist, :id, :playlist_name, :description, :private, :user, :playlist_songs, :songs
  end
end
