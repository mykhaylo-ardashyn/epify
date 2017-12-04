User.destroy_all
Story.destroy_all

User.create(
  [
    { email: 'alexander.tartmin@test.com', first_name: 'Alexander', last_name: 'Tartmin', access_token: 'accesstoken1', password: 'password' }
    # { email: 'matvichuck.stanislav@test.com', first_name: 'Stanislav', last_name: 'Matvichuck', access_token: 'accesstoken2', password: 'password' },
    # { email: 'andrii.doroshev@test.com', first_name: 'Andrii', last_name: 'Doroshev', access_token: 'accesstoken3', password: 'password' },
    # { email: 'valeriia.savchenko@test.com', first_name: 'Valeriia', last_name: 'Savchenko', access_token: 'accesstoken4', password: 'password' },
    # { email: 'nataliia.siroukh@test.com', first_name: 'Nataliia', last_name: 'Siroukh', access_token: 'accesstoken5', password: 'password' },
    # { email: 'viktoria.gridasova@test.com', first_name: 'Viktoria', last_name: 'Gridasova', access_token: 'accesstoken6', password: 'password' },
    # { email: 'mykhail.ardashyn@test.com', first_name: 'Mykhail', last_name: 'Ardashyn', access_token: 'accesstoken7', password: 'password' }
  ]
)

User.all.each do |current_user|
  Story.create(
    [
      { name: 'Illuminati Confirmed', description: 'lalala', rating: 101, audio_url: 'https://s3.eu-central-1.amazonaws.com/static.cross.devlits.com/ep/Illuminati+Confirmed.mp3', image_url: 'https://s3.eu-central-1.amazonaws.com/static.cross.devlits.com/ep/Illuminati+Confirmed.jpg', author_id: current_user.id},
      { name: 'Allahu Akbar', description: 'lalala', rating: 213, audio_url: 'https://s3.eu-central-1.amazonaws.com/static.cross.devlits.com/ep/allahu_akbar.mp3', image_url: 'https://s3.eu-central-1.amazonaws.com/static.cross.devlits.com/ep/Allahu+Akbar.jpg', author_id: current_user.id},
      { name: 'Just Do It', description: 'lalala', rating: 334, audio_url: 'https://s3.eu-central-1.amazonaws.com/static.cross.devlits.com/ep/just_do_it.mp3', image_url: 'https://s3.eu-central-1.amazonaws.com/static.cross.devlits.com/ep/Just+Do+It.jpg', author_id: current_user.id},
      { name: 'Wasted', description: 'lalala', rating: 234, audio_url: 'https://s3.eu-central-1.amazonaws.com/static.cross.devlits.com/ep/wasted.mp3', image_url: 'https://s3.eu-central-1.amazonaws.com/static.cross.devlits.com/ep/Wasted.jpg', author_id: current_user.id},
      { name: 'I am your father', description: 'lalala', rating: 777, audio_url: 'https://s3.eu-central-1.amazonaws.com/static.cross.devlits.com/ep/I_am_your_father.mp3', image_url: 'https://s3.eu-central-1.amazonaws.com/static.cross.devlits.com/ep/sw03.jpg', author_id: current_user.id},
      { name: 'Drum joke', description: 'lalala', rating: 675, audio_url: 'https://s3.eu-central-1.amazonaws.com/static.cross.devlits.com/ep/Joke-drum-sound.mp3', image_url: 'https://s3.eu-central-1.amazonaws.com/static.cross.devlits.com/ep/Joke-drum-sound.jpg', author_id: current_user.id},
      { name: 'Eralash', description: 'lalala', rating: 363, audio_url: 'https://s3.eu-central-1.amazonaws.com/static.cross.devlits.com/ep/eralash.mp3', image_url: 'https://s3.eu-central-1.amazonaws.com/static.cross.devlits.com/ep/eralash.jpg', author_id: current_user.id},
      { name: 'Wa-wa-wa', description: 'lalala', rating: 217, audio_url: 'https://s3.eu-central-1.amazonaws.com/static.cross.devlits.com/ep/wa-wa-wa.mp3', image_url: 'https://s3.eu-central-1.amazonaws.com/static.cross.devlits.com/ep/wa-wa-wa.jpg', author_id: current_user.id},
      { name: 'Help Me', description: 'lalala', rating: 30, audio_url: 'https://s3.eu-central-1.amazonaws.com/static.cross.devlits.com/ep/Help+Me.mp3', image_url: 'https://s3.eu-central-1.amazonaws.com/static.cross.devlits.com/ep/Help+Me.jpg', author_id: current_user.id},
      { name: 'Imperial song', description: 'lalala', rating: 321, audio_url: 'https://s3.eu-central-1.amazonaws.com/static.cross.devlits.com/ep/Imperial_song.mp3', image_url: 'https://s3.eu-central-1.amazonaws.com/static.cross.devlits.com/ep/sw.jpg', author_id: current_user.id},
      { name: 'Cockroach', description: 'lalala', rating: 286, audio_url: 'https://s3.eu-central-1.amazonaws.com/static.cross.devlits.com/ep/cockroach.mp3', image_url: 'https://s3.eu-central-1.amazonaws.com/static.cross.devlits.com/ep/Cockroach.jpg', author_id: current_user.id},
      { name: 'Jaws', description: 'lalala', rating: 127, audio_url: 'https://s3.eu-central-1.amazonaws.com/static.cross.devlits.com/ep/jaws.mp3', image_url: 'https://s3.eu-central-1.amazonaws.com/static.cross.devlits.com/ep/Jaws.jpg', author_id: current_user.id},
      { name: 'Chewbacca roar', description: 'lalala', rating: 76, audio_url: 'https://s3.eu-central-1.amazonaws.com/static.cross.devlits.com/ep/Chewbacca_roar.mp3', image_url: 'https://s3.eu-central-1.amazonaws.com/static.cross.devlits.com/ep/sw02.jpg', author_id: current_user.id},
      { name: 'Star Wars Theme', description: 'lalala', rating: 163, audio_url: 'https://s3.eu-central-1.amazonaws.com/static.cross.devlits.com/ep/Star_Wars_Theme.mp3', image_url: 'https://s3.eu-central-1.amazonaws.com/static.cross.devlits.com/ep/sw01.jpg', author_id: current_user.id},
      { name: 'The power of the dark side', description: 'lalala', rating: 453, audio_url: 'https://s3.eu-central-1.amazonaws.com/static.cross.devlits.com/ep/The_power_of_the_dark_side.mp3', image_url: 'https://s3.eu-central-1.amazonaws.com/static.cross.devlits.com/ep/sw04.jpg', author_id: current_user.id},
      { name: 'Fart', description: 'lalala', rating: 274, audio_url: 'https://s3.eu-central-1.amazonaws.com/static.cross.devlits.com/ep/fart.mp3', image_url: 'https://s3.eu-central-1.amazonaws.com/static.cross.devlits.com/ep/fart.jpg', author_id: current_user.id},
      { name: 'Epic Win', description: 'lalala', rating: 831, audio_url: 'https://s3.eu-central-1.amazonaws.com/static.cross.devlits.com/ep/Epic+Win.mp3', image_url: 'https://s3.eu-central-1.amazonaws.com/static.cross.devlits.com/ep/Epic+Win.png', author_id: current_user.id},
      { name: 'Sparta', description: 'lalala', rating: 831, audio_url: 'https://s3.eu-central-1.amazonaws.com/static.cross.devlits.com/ep/sparta.mp3', image_url: 'https://s3.eu-central-1.amazonaws.com/static.cross.devlits.com/ep/Sparta.jpg', author_id: current_user.id}
    ]
  )
end

