class Story < ApplicationRecord
  has_many :user_stories
  has_many :users, through: :user_stories
  belongs_to :author, class_name: 'User', foreign_key: :author_id, inverse_of: :my_stories
end