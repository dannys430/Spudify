@songs.each do |song|
  json.set! song.id do
    json.extract! song, :id, :song_name, :album_id, :explicit, :artist  # need to add artist name here too
  end
end