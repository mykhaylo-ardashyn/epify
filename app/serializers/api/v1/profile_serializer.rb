class Api::V1::ProfileSerializer < ActiveModel::Serializer
  attributes :first_name, :last_name, :email
  has_many :story
end
