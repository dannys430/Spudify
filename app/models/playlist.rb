# == Schema Information
#
# Table name: playlists
#
#  id            :bigint           not null, primary key
#  playlist_name :string           not null
#  description   :text
#  user_id       :integer          not null
#  private       :boolean          default(FALSE), not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Playlist < ApplicationRecord
  validates :playlist_name, :user_id, presence: true
  validates :private, inclusion: {in: [true, false]}

  belongs_to :user,
  foreign_key: :user_id,
  class_name: :User

  has_one_attached :photo
  
end
