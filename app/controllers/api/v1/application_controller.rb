class Api::V1::ApplicationController < ActionController::Base
  include Api::V1::ErrorSerializer

  before_action :authenticate_api_user

  def jsonapi_parse(params, values)
    ActiveModelSerializers::Deserialization.jsonapi_parse(params, values)
  end

  def render_response(klass, interaction_params = {}, render_options = {})
    interaction_response = klass.run(interaction_params.merge(current_user: @current_user))
    response, status = interaction_response.handler
    result = { json: response, status: status }

    if status == :ok
      render result.merge(render_options)
    else
      result[:json] = Api::V1::ErrorSerializer.serialize(result[:json].as_json, result[:status])
      render result
    end
  end

  def authenticate_api_user
    return nil if request.headers['Access-Token'].blank?
    @current_user ||= User.find_by(access_token: request.headers['Access-Token'])
  end
end
