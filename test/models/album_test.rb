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
require 'test_helper'

class AlbumTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end