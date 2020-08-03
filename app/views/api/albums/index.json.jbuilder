@albums.each do |album|
  json.set! album.id do
    json.extract! album, :id, :album_name # need to add artist name here too
    if album.cover_art.attached?
      json.coverArtUrl url_for(album.cover_art)
    end
  end
end