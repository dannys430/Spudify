# == Schema Information
#
# Table name: artists
#
#  id          :bigint           not null, primary key
#  artist_name :string           not null
#  bio         :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Artist < ApplicationRecord
  validates :artist_name, presence: true

  has_many :albums,
  foreign_key: :artist_id,
  class_name: :Album,
  dependent: :destroy

  has_many :songs,
  through: :albums,
  source: :songs
  
  has_one_attached :profile_photo,
  dependent: :destroy

  has_one_attached :cover_photo,
  dependent: :destroy

end
