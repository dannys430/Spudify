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
  
end
