class Api::V1::ProfilesController < Api::V1::ApplicationController
  skip_before_action :authenticate_api_user, only: :create

  def show
    render_response(Api::V1::Profile::Show, {}, { serializer: Api::V1::ProfileSerializer })
  end

  def create
    render_response(Api::V1::Profile::Create, profile_params, { serializer: Api::V1::ProfileSerializer })
  end

  private

  def profile_params
    jsonapi_parse(params, only: %w[first_name last_name email password password_confirmation])
  end
end