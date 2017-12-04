class Api::V1::Signs::Destroy < BaseInteraction
  def execute
    return errors.add(:user, 'logout failed') unless current_user.update(access_token: nil)
    { message: 'successfully logged out' }
  end
end
