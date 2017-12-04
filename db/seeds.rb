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

Story.create(
  [
    { name: 'Allahu Akbar', description: 'lalala', rating: 10, audio_url: '', image_url: ''},
    { name: 'Some name', description: 'lalala', rating: 10, audio_url: '', image_url: ''},
    { name: 'Some name', description: 'lalala', rating: 10, audio_url: '', image_url: ''}
  ]
)

# { name: 'Allahu Akbar', description: 'lalala', raiting: 10, url: '', image_url: ''}
# { name: 'Help Me', description: 'lalala', raiting: 10, url: '', image_url: ''}
# { name: 'I Dont Give A Fuck', description: 'lalala', raiting: 10, url: '', image_url: ''}
# { name: 'Illuminati Confirmed', description: 'lalala', raiting: 10, url: '', image_url: ''}
# { name: 'Wasted', description: 'lalala', raiting: 10, url: '', image_url: ''}
# { name: 'Just Do It', description: 'lalala', raiting: 10, url: '', image_url: ''}