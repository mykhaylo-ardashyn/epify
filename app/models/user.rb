class User < ApplicationRecord
  has_many :user_stories
  has_many :stories, through: :user_stories
  has_many :my_stories, class_name: 'Story', foreign_key: :author_id, inverse_of: :author

  attr_accessor :password

  validates :email, presence: true, uniqueness: true
  validates :password, presence: true, confirmation: true, length: { within: 6..40 }, on: :create
  validates :password, confirmation: true, length: { within: 6..40 }, allow_blank: true, on: :update
end