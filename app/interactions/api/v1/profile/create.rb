class Api::V1::Profile::Create < BaseInteraction
  object :current_user, class: User, default: nil
  string :first_name, default: ''
  string :last_name, default: ''
  string :email
  string :password
  string :password_confirmation

  validate do
    errors.add(:base, 'password did not match with password confirmation') if password != password_confirmation
  end

  def execute
    new_user = User.new(inputs.except(:current_user))
    salt = BCrypt::Engine.generate_salt
    new_user.encrypted_password = BCrypt::Engine.hash_secret(password, salt)
    return errors.add(:base, new_user.errors.full_messages.to_sentence) unless new_user.save
    new_user
  end
end




