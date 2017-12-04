class Api::V1::Profile::Show < BaseInteraction
  validate do
    errors.add(:base, 'something goes wrong, try to login one more time') unless current_user.present?
  end

  def execute
    current_user
  end
end
