module Api::V1::ErrorSerializer
  def self.serialize(errors, status)
    return unless errors
    json = {}
    new_hash = errors.to_hash.map do |k, v|
      v.map do |msg|
        { id: k, title: msg, status: status }
      end
    end.flatten
    json[:errors] = new_hash
    json
  end
end
