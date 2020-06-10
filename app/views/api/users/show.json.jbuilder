json.extract! @user, :id, :email, :username, :name

# json.user do
#   json.extract! @user, :id, :email, :username, :name
#   json.playlistIds @user.playlists.pluck(:id)
# end

# json.playlists do
#   @user.playlists.each do |playlist|
#     json.set! playlist.id do
#       json.extract! playlist, :playlist_name
#     end
#   end
# end

# pluck returns an array of that attribute


# state.session.currentUser
# state.entities.playlists

# refactor receive current user
# build user actions for fetching users
# refactor users reducer