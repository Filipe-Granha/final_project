require 'test_helper'

class PropertyTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  test "Properties have a location" do
    assert_equal("Edinburgh", properties(:one).location)
  end

  test "Properties with rent are to be kept" do
    assert properties(:one).sell == "Keep for now!"
  end

  test "Properties without rent are to be sold" do
    assert properties(:two).sell == "Sell!"
  end

end
