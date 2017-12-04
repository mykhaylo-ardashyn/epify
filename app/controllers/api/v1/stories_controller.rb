class Api::V1::StoriesController < Api::V1::ApplicationController
  def index
    render_response(Api::V1::Story::Index)
  end

  def show
    render_response(Api::V1::Story::Show, id: params[:id])
  end

  # def create
  #   render_response(Api::V1::Profile::Create, profile_params, { serializer: Api::V1::ProfileSerializer })
  # end

  # private
  #
  # def profile_params
  #   jsonapi_parse(params, only: %w[first_name last_name email password password_confirmation])
  # end
end