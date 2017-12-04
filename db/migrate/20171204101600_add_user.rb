class AddUser < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :first_name, null: false, default: ''
      t.string :last_name, null: false, default: ''
      t.string :email, null: false, default: ''
      t.string :encrypted_password, null: false, default: ''
      t.string :access_token
      t.string :reset_password_token

      t.timestamps
    end

    create_table :stories do |t|
      t.string :name
      t.string :description
      t.integer :rating
      t.integer :author_id
      t.string :audio_url
      t.string :image_url

      t.timestamp
    end

    create_table :user_stories do |t|
      t.belongs_to :user, index: true
      t.belongs_to :story, index: true

      t.timestamps
    end

    add_index :users, :email, unique: true
    add_index :users, :reset_password_token, unique: true
  end
end
