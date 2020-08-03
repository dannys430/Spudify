@artists.each do |artist|
  json.set! artist.id do
    json.extract! artist, :id, :artist_name
    if artist.profile_photo.attached?
      json.profilePhotoUrl url_for(artist.profile_photo)
    end
  end
end