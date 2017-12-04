class Api::V1::Story::Index < BaseInteraction
  def execute
    ::Story.all
  end
end
