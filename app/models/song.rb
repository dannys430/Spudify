# == Schema Information
#
# Table name: songs
#
#  id         :bigint           not null, primary key
#  song_name  :string           not null
#  year       :date             not null
#  album_id   :integer          not null
#  explicit   :boolean          default(FALSE), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Song < ApplicationRecord
  validates :song_name, :year, :album_id, presence: true
  validates :explicit, inclusion: {in: [true, false]}
  
  belongs_to :album,
  foreign_key: :album_id,
  class_name: :Album

  has_one :artist,
  through: :album,
  source: :artist

  has_many :playlist_songs,
  foreign_key: :song_id,
  class_name: :PlaylistSong
  
  has_many :playlists,
  through: :playlist_songs,
  source: :playlist

  has_one_attached :song_file,
  dependent: :destroy

end
