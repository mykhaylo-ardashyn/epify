class Api::V1::AccessTokenSerializer < ActiveModel::Serializer
  type 'access_token'

  attributes :access_token
end
