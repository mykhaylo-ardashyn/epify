class Api::V1::StorySerializer < ActiveModel::Serializer
  attributes :name, :description, :rating, :author_id, :audio_url, :image_url
end
