json.extract! @artist, :id, :artist_name, :bio

json.albums do
  json.array! @artist.albums.each do |album|
    json.extract! album, :id, :album_name, :year, :explicit, :artist_id 

    if album.cover_art.attached?
      json.coverArtUrl url_for(album.cover_art)
    end
  end
end

if @artist.cover_photo.attached?
  json.coverPhotoUrl url_for(@artist.cover_photo)
end

