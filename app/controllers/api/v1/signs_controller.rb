class Api::V1::SignsController < Api::V1::ApplicationController
  skip_before_action :authenticate_api_user, only: :create

  def create
    res = Api::V1::Signs::Create.run(user_params)
    {
      true => -> { render json: Api::V1::AccessTokenSerializer.new(res.result), status: :ok },
      false => -> { render json: Api::V1::ErrorSerializer.serialize(res.errors, :unprocessable_entity) }
    }[!!res.valid?].call
  end

  def destroy
    render_response(Api::V1::Signs::Destroy)
  end

  private

  def user_params
    jsonapi_parse(params, only: %w(email password))
  end
end
