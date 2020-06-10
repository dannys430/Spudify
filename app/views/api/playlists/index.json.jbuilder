@playlists.each do |playlist|
  json.set! playlist.id do
    json.extract! playlist, :id, :playlist_name, :description, :private
  end
end
