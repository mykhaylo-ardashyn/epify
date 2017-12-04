User.destroy_all

User.create(
  [
    { email: 'alexander.tartmin@test.com', first_name: 'Alexander', last_name: 'Tartmin', access_token: 'accesstoken1', password: 'password' },
    { email: 'matvichuck.stanislav@test.com', first_name: 'Stanislav', last_name: 'Matvichuck', access_token: 'accesstoken2', password: 'password' },
    { email: 'andrii.doroshev@test.com', first_name: 'Andrii', last_name: 'Doroshev', access_token: 'accesstoken3', password: 'password' },
    { email: 'valeriia.savchenko@test.com', first_name: 'Valeriia', last_name: 'Savchenko', access_token: 'accesstoken4', password: 'password' },
    { email: 'nataliia.siroukh@test.com', first_name: 'Nataliia', last_name: 'Siroukh', access_token: 'accesstoken5', password: 'password' },
    { email: 'viktoria.gridasova@test.com', first_name: 'Viktoria', last_name: 'Gridasova', access_token: 'accesstoken6', password: 'password' },
    { email: 'mykhail.ardashyn@test.com', first_name: 'Mykhail', last_name: 'Ardashyn', access_token: 'accesstoken7', password: 'password' }
  ]
)

User.all.each do |current_user|
  Story.create(
    [
      { name: 'Illuminati Confirmed', description: 'lalala', rating: 101, audio_url: 'https://s3.eu-central-1.amazonaws.com/static.cross.devlits.com/ep/Illuminati+Confirmed.mp3', image_url: 'https://s3.eu-central-1.amazonaws.com/static.cross.devlits.com/ep/Illuminati+Confirmed.jpg', author_id: current_user.id},
      { name: 'Allahu Akbar', description: 'lalala', rating: 213, audio_url: 'https://s3.eu-central-1.amazonaws.com/static.cross.devlits.com/ep/Allahu+Akbar.mp3', image_url: 'https://s3.eu-central-1.amazonaws.com/static.cross.devlits.com/ep/Allahu+Akbar.jpg', author_id: current_user.id},
      { name: 'Help Me', description: 'lalala', rating: 30, audio_url: 'https://s3.eu-central-1.amazonaws.com/static.cross.devlits.com/ep/Help+Me.mp3', image_url: 'https://s3.eu-central-1.amazonaws.com/static.cross.devlits.com/ep/Help+Me.jpg', author_id: current_user.id},
      { name: 'Just Do It', description: 'lalala', rating: 334, audio_url: 'https://s3.eu-central-1.amazonaws.com/static.cross.devlits.com/ep/Just+Do+It.mp3', image_url: 'https://s3.eu-central-1.amazonaws.com/static.cross.devlits.com/ep/Just+Do+It.jpg', author_id: current_user.id},
      { name: 'Wasted', description: 'lalala', rating: 234, audio_url: 'https://s3.eu-central-1.amazonaws.com/static.cross.devlits.com/ep/Wasted.mp3', image_url: 'https://s3.eu-central-1.amazonaws.com/static.cross.devlits.com/ep/Wasted.jpg', author_id: current_user.id},
    ]
  )
end

# { name: 'Allahu Akbar', description: 'lalala', raiting: 10, url: '', image_url: ''}
# { name: 'Help Me', description: 'lalala', raiting: 10, url: '', image_url: ''}
# { name: 'I Dont Give A Fuck', description: 'lalala', raiting: 10, url: '', image_url: ''}
# { name: 'Illuminati Confirmed', description: 'lalala', raiting: 10, url: '', image_url: ''}
# { name: 'Wasted', description: 'lalala', raiting: 10, url: '', image_url: ''}
# { name: 'Just Do It', description: 'lalala', raiting: 10, url: '', image_url: ''}