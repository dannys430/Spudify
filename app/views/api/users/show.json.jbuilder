json.extract! @user, :id, :email, :username, :name

# json.playlists do
#   @user.playlists.each do |playlist|
#     json.set! playlist.id do
#       json.extract! playlist, :playlist_name
#     end
#   end
# end
