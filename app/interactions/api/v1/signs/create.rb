class Api::V1::Signs::Create < ActiveInteraction::Base
  string :email
  string :password

  # validate do
  #   errors.add(:user, 'invalid email or password') unless logging_user.present? && logging_user.password == password
  # end

  def execute
    errors.add(:user, 'authentication failed!') unless logging_user.update(access_token: SecureRandom.hex(6))
    logging_user
  end

  def logging_user
    @logging_user ||= ::User.find_by(email: email)
  end
end
