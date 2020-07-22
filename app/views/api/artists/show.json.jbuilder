json.extract! @artist, :id, :artist_name, :bio #, :profile_photo

json.albums do
  json.array! @artist.albums.each do |album|
    json.extract! album, :id, :album_name, :year, :explicit, :artist_id 

    if Rails.application.assets.find_asset("#{album.album_name.split(' ').join('_')}") != nil
      json.coverArtUrl image_url("#{album.album_name.split(' ').join('_')}")
    end
  end
end


# json.coverPhotoUrl url_for(@artist.cover_photo)
if Rails.application.assets.find_asset("#{@artist.artist_name.split(' ').join('_')}") != nil
  json.coverPhotoUrl image_url(@artist.artist_name.split(' ').join('_'))
end

if Rails.application.assets.find_asset("#{@artist.artist_name.split(' ').join('_')}_sml") != nil
  json.profilePhotoUrl image_url("#{@artist.artist_name.split(' ').join('_')}_sml")
end