@songs.each do |song|
  json.set! song.id do
    json.extract! song, :id, :song_name, :explicit # need to add artist name here too
  end
end