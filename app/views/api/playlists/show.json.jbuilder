# json.extract! @playlist, :id, :playlist_name, :description, :private

# json.creatorName @playlist.user.name

# json.extract! @playlist.songs


# @playlists.songs.each do |song| 
#   json.extract! song, :id, :song_name, :year, :album_id, :explicit
# end


# @playlist.songs.each do |song|
#   json.extract! song, :id, :song_name, :year, :album_id, :explicit
# end

#  json.user do
#   json.extract! @user, :id, :email, :username, :name
#   json.playlistIds @user.playlists.pluck(:id)
# end
