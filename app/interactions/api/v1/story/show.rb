class Api::V1::Story::Show < BaseInteraction
  string :id

  def execute
    ::Story.find_by(id: id)
  end
end
