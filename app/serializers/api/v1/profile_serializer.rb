class Api::V1::ProfileSerializer < ActiveModel::Serializer
  attributes :first_name, :last_name, :email, :my_stories

  def my_stories
    object.my_stories.map do |my_story|
      Api::V1::MyStorySerializer.new(my_story, scope: scope, root: false)
    end
  end
end
