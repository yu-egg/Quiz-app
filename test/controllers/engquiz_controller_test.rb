require 'test_helper'

class EngquizControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get engquiz_index_url
    assert_response :success
  end

end
