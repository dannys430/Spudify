# == Schema Information
#
# Table name: albums
#
#  id         :bigint           not null, primary key
#  album_name :string           not null
#  year       :date             not null
#  artist_id  :integer          not null
#  explicit   :boolean          default(FALSE), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Album < ApplicationRecord
  validates :album_name, :year, :artist_id, presence: true
  validates :explicit, inclusion: {in: [true, false]}
  
end
