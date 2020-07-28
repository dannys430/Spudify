# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

ActiveRecord::Base.transaction do
  Song.destroy_all
  Album.destroy_all
  Artist.destroy_all
  Playlist.destroy_all
  User.destroy_all

  # USERS
  # Guest
  guest = User.create(
    email: 'guest@example.com',
    password: 'password',
    name: 'Guest',
    birth_date: 19900101,
    gender: 'Male'
  )



  # ARTISTS
  # Mariah Carey
  mariah_carey = Artist.create(
    artist_name: 'Mariah Carey', 
    bio: "Rising to prominence in the early 90's, Mariah Carey is known the world over. Her remarkable vocal range and seductive honey-harmonies bless each record that bears her name"
  )
  mariah_carey.cover_photo.attach(io: open('https://active-storage-spudify-pro.s3.amazonaws.com/artists/mariah_carey/mariah_carey_cover_photo.jpg'), filename: 'mariah_carey_cover_photo.jpg')

  # Always Never
  always_never = Artist.create(
    artist_name: 'Always Never', 
    bio: "With roots in Toronto, Canada, this alt-RnB duo is the force behind the viral hit, Wylin', from their self-titled debut album.  Their unique style imbues each track with a mood that is inescapable.",
  )
  always_never.cover_photo.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/always_never/always_never_cover_photo.jpg"), filename: "always_never_cover_photo.jpg")

  # Seal
  seal = Artist.create(
    artist_name: 'Seal', 
    bio: "With over 20 million records sold worldwide, Seal is an internationally recognized singer and songwriter known for hits like 'Crazy', 'Kiss From a Rose', and 'Love\'s Divine'",
  )
  seal.cover_photo.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/seal/seal_cover_photo.jpg"), filename: "seal_cover_photo.jpg")



  # ALBUMS
  # E=MC²
  emc = mariah_carey.albums.create(
    album_name: 'E=MC²',
    year: 20080415
  )
  emc.cover_art.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/mariah_carey/albums/EMC/emc_cover_art.jpg"), filename: "emc_cover_art.jpg")

      migrate = emc.songs.create(
        song_name: "Migrate",
        year: emc.year
      )
      migrate.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/mariah_carey/albums/EMC/1_Migrate.mp3"), filename: "1_Migrate.mp3")

      touch_my_body = emc.songs.create(
        song_name: "Touch My Body",
        year: emc.year
      )
      touch_my_body.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/mariah_carey/albums/EMC/2_Touch_My_Body.mp3"), filename: "2_Touch_My_Body.mp3")

      cruise_control = emc.songs.create(
        song_name: "Cruise Control",
        year: emc.year
      )
      cruise_control.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/mariah_carey/albums/EMC/3_Cruise_Control.mp3"), filename: "3_Cruise_Control.mp3")

      i_stay_in_love = emc.songs.create(
        song_name: "I Stay In Love",
        year: emc.year
      )
      i_stay_in_love.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/mariah_carey/albums/EMC/4_I_Stay_In_Love.mp3"), filename: "4_I_Stay_In_Love.mp3")

      side_effects = emc.songs.create(
        song_name: "Side Effects",
        year: emc.year
      )
      side_effects.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/mariah_carey/albums/EMC/5_Side_Effects.mp3"), filename: "5_Side_Effects.mp3")

      im_that_chick = emc.songs.create(
        song_name: "I'm That Chick",
        year: emc.year
      )
      im_that_chick.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/mariah_carey/albums/EMC/6_I'm_That_Chick.mp3"), filename: "6_I'm_That_Chick.mp3")

      love_story = emc.songs.create(
        song_name: "Love Story",
        year: emc.year
      )
      love_story.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/mariah_carey/albums/EMC/7_Love_Story.mp3"), filename: "7_Love_Story.mp3")

      ill_be_lovin_u_long_time = emc.songs.create(
        song_name: "I'll Be Lovin' U Long Time",
        year: emc.year
      )
      ill_be_lovin_u_long_time.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/mariah_carey/albums/EMC/8_I'll_Be_Lovin'_U_Long_Time.mp3"), filename: "8_I'll_Be_Lovin'_U_Long_Time.mp3")

      last_kiss = emc.songs.create(
        song_name: "Last Kiss",
        year: emc.year
      )
      last_kiss.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/mariah_carey/albums/EMC/9_Last_Kiss.mp3"), filename: "9_Last_Kiss.mp3")

      thanx_4_nothin = emc.songs.create(
        song_name: "Thanx 4 Nothin'",
        year: emc.year
      )
      thanx_4_nothin.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/mariah_carey/albums/EMC/10_Thanx_4_Nothin'.mp3"), filename: "10_Thanx_4_Nothin'.mp3")

      ooc = emc.songs.create(
        song_name: "O.O.C.",
        year: emc.year
      )
      ooc.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/mariah_carey/albums/EMC/11_O.O.C..mp3"), filename: "11_O.O.C..mp3")

      for_the_record = emc.songs.create(
        song_name: "For The Record",
        year: emc.year
      )
      for_the_record.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/mariah_carey/albums/EMC/12_For_The_Record.mp3"), filename: "12_For_The_Record.mp3")

      bye_bye = emc.songs.create(
        song_name: "Bye Bye",
        year: emc.year
      )
      bye_bye.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/mariah_carey/albums/EMC/13_Bye_Bye.mp3"), filename: "13_Bye_Bye.mp3")

      i_wish_you_well = emc.songs.create(
        song_name: "I Wish You Well",
        year: emc.year
      )
      i_wish_you_well.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/mariah_carey/albums/EMC/14_I_Wish_You_Well.mp3"), filename: "14_I_Wish_You_Well.mp3")

  # Memoirs of an Imperfect Angel
  memoirs_of_an_imperfect_angel = mariah_carey.albums.create(
    album_name: 'Memoirs of an Imperfect Angel',
    year: 20090929
  )
  memoirs_of_an_imperfect_angel.cover_art.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/mariah_carey/albums/Memoirs_Of_An_Imperfect_Angel/memoirs_of_an_imperfect_angel_cover_art.jpg"), filename: "memoirs_of_an_imperfect_angel_cover_art.jpg")

      betcha_gon_know = memoirs_of_an_imperfect_angel.songs.create(
        song_name: "Betcha Gon' Know (the prologue)",
        year: memoirs_of_an_imperfect_angel.year
      )
      betcha_gon_know.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/mariah_carey/albums/Memoirs_Of_An_Imperfect_Angel/1_Betcha_Gon'_Know_(the_prologue).mp3"), filename: "1_Betcha_Gon'_Know_(the_prologue).mp3")

      obsessed = memoirs_of_an_imperfect_angel.songs.create(
        song_name: "Obsessed",
        year: memoirs_of_an_imperfect_angel.year
      )
      obsessed.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/mariah_carey/albums/Memoirs_Of_An_Imperfect_Angel/2_Obsessed.mp3"), filename: "2_Obsessed.mp3")

      hateu = memoirs_of_an_imperfect_angel.songs.create(
        song_name: "H.A.T.E.U.",
        year: memoirs_of_an_imperfect_angel.year
      )
      hateu.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/mariah_carey/albums/Memoirs_Of_An_Imperfect_Angel/3_H.A.T.E.U..mp3"), filename: "3_H.A.T.E.U..mp3")

      candy_bling = memoirs_of_an_imperfect_angel.songs.create(
        song_name: "Candy Bling",
        year: memoirs_of_an_imperfect_angel.year
      )
      candy_bling.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/mariah_carey/albums/Memoirs_Of_An_Imperfect_Angel/4_Candy_Bling.mp3"), filename: "4_Candy_Bling.mp3")

      ribbon = memoirs_of_an_imperfect_angel.songs.create(
        song_name: "Ribbon",
        year: memoirs_of_an_imperfect_angel.year
      )
      ribbon.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/mariah_carey/albums/Memoirs_Of_An_Imperfect_Angel/5_Ribbon.mp3"), filename: "5_Ribbon.mp3")

      inseparable = memoirs_of_an_imperfect_angel.songs.create(
        song_name: "Inseparable",
        year: memoirs_of_an_imperfect_angel.year
      )
      inseparable.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/mariah_carey/albums/Memoirs_Of_An_Imperfect_Angel/6_Inseparable.mp3"), filename: "6_Inseparable.mp3")

      standing_o = memoirs_of_an_imperfect_angel.songs.create(
        song_name: "Standing O",
        year: memoirs_of_an_imperfect_angel.year
      )
      standing_o.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/mariah_carey/albums/Memoirs_Of_An_Imperfect_Angel/7_Standing_O.mp3"), filename: "7_Standing_O.mp3")

      its_a_wrap = memoirs_of_an_imperfect_angel.songs.create(
        song_name: "It's A Wrap",
        year: memoirs_of_an_imperfect_angel.year
      )
      its_a_wrap.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/mariah_carey/albums/Memoirs_Of_An_Imperfect_Angel/8_It's_A_Wrap.mp3"), filename: "8_It's_A_Wrap.mp3")

      up_out_my_face = memoirs_of_an_imperfect_angel.songs.create(
        song_name: "Up Out My Face",
        year: memoirs_of_an_imperfect_angel.year
      )
      up_out_my_face.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/mariah_carey/albums/Memoirs_Of_An_Imperfect_Angel/9_Up_Out_My_Face.mp3"), filename: "9_Up_Out_My_Face.mp3")

      up_out_my_face_the_reprise = memoirs_of_an_imperfect_angel.songs.create(
        song_name: "Up Out My Face (the reprise)",
        year: memoirs_of_an_imperfect_angel.year
      )
      up_out_my_face_the_reprise.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/mariah_carey/albums/Memoirs_Of_An_Imperfect_Angel/10_Up_Out_My_Face_(the_reprise).mp3"), filename: "10_Up_Out_My_Face_(the_reprise).mp3")

      more_than_just_friends = memoirs_of_an_imperfect_angel.songs.create(
        song_name: "More Than Just Friends",
        year: memoirs_of_an_imperfect_angel.year
      )
      more_than_just_friends.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/mariah_carey/albums/Memoirs_Of_An_Imperfect_Angel/11_More_Than_Just_Friends.mp3"), filename: "11_More_Than_Just_Friends.mp3")

      the_impossible = memoirs_of_an_imperfect_angel.songs.create(
        song_name: "The Impossible",
        year: memoirs_of_an_imperfect_angel.year
      )
      the_impossible.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/mariah_carey/albums/Memoirs_Of_An_Imperfect_Angel/12_The_Impossible.mp3"), filename: "12_The_Impossible.mp3")

      the_impossible_the_reprise = memoirs_of_an_imperfect_angel.songs.create(
        song_name: "The Impossible (the reprise)",
        year: memoirs_of_an_imperfect_angel.year
      )
      the_impossible_the_reprise.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/mariah_carey/albums/Memoirs_Of_An_Imperfect_Angel/13_The_Impossible_(the_reprise).mp3"), filename: "13_The_Impossible_(the_reprise).mp3")

      angel_the_prelude = memoirs_of_an_imperfect_angel.songs.create(
        song_name: "Angel (the prelude)",
        year: memoirs_of_an_imperfect_angel.year
      )
      angel_the_prelude.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/mariah_carey/albums/Memoirs_Of_An_Imperfect_Angel/14_Angel_(the_prelude).mp3"), filename: "14_Angel_(the_prelude).mp3")

      angels_cry = memoirs_of_an_imperfect_angel.songs.create(
        song_name: "Angels Cry",
        year: memoirs_of_an_imperfect_angel.year
      )
      angels_cry.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/mariah_carey/albums/Memoirs_Of_An_Imperfect_Angel/15_Angels_Cry.mp3"), filename: "15_Angels_Cry.mp3")

      languishing_the_interlude = memoirs_of_an_imperfect_angel.songs.create(
        song_name: "Languishing (the interlude)",
        year: memoirs_of_an_imperfect_angel.year
      )
      languishing_the_interlude.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/mariah_carey/albums/Memoirs_Of_An_Imperfect_Angel/16_Languishing_(the_interlude).mp3"), filename: "16_Languishing_(the_interlude).mp3")

      i_want_to_know_what_love_is = memoirs_of_an_imperfect_angel.songs.create(
        song_name: "I Want To Know What Love Is",
        year: memoirs_of_an_imperfect_angel.year
      )
      i_want_to_know_what_love_is.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/mariah_carey/albums/Memoirs_Of_An_Imperfect_Angel/17_I_Want_To_Know_What_Love_Is.mp3"), filename: "17_I_Want_To_Know_What_Love_Is.mp3")

      obsessed_cahill_radio_mix = memoirs_of_an_imperfect_angel.songs.create(
        song_name: "Obsessed - Cahill Radio Mix",
        year: memoirs_of_an_imperfect_angel.year
      )
      obsessed_cahill_radio_mix.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/mariah_carey/albums/Memoirs_Of_An_Imperfect_Angel/18_Obsessed_(Cahill_Radio_Mix).mp3"), filename: "18_Obsessed_(Cahill_Radio_Mix).mp3")

      obsessed_seamus_haji_and_paul_emanuel_radio_edit = memoirs_of_an_imperfect_angel.songs.create(
        song_name: "Obsessed - Seamus Haji & Paul Emanuel Radio Edit",
        year: memoirs_of_an_imperfect_angel.year
      )
      obsessed_seamus_haji_and_paul_emanuel_radio_edit.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/mariah_carey/albums/Memoirs_Of_An_Imperfect_Angel/19_Obsessed_(Seamus_Haji_%26amp%3B_Paul_Emanuel_Radio_Edit).mp3"), filename: "19_Obsessed_(Seamus_Haji_%26amp%3B_Paul_Emanuel_Radio_Edit).mp3")

      obsessed_jump_smokers_radio_edit = memoirs_of_an_imperfect_angel.songs.create(
        song_name: "Obsessed - Jump Smokers Radio Edit",
        year: memoirs_of_an_imperfect_angel.year
      )
      obsessed_jump_smokers_radio_edit.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/mariah_carey/albums/Memoirs_Of_An_Imperfect_Angel/20_Obsessed_(Jump_Smokers_Radio_Edit).mp3"), filename: "20_Obsessed_(Jump_Smokers_Radio_Edit).mp3")

      obsessed_friscia_and_lamboy_radio_mix = memoirs_of_an_imperfect_angel.songs.create(
        song_name: "Obsessed - Friscia and Lamboy Radio Mix",
        year: memoirs_of_an_imperfect_angel.year
      )
      obsessed_friscia_and_lamboy_radio_mix.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/mariah_carey/albums/Memoirs_Of_An_Imperfect_Angel/21_Obsessed_(Friscia_and_Lamboy_Radio_Mix).mp3"), filename: "21_Obsessed_(Friscia_and_Lamboy_Radio_Mix).mp3")

  # Always Never (2018)
  always_never_2018 = always_never.albums.create(
    album_name: 'Always Never',
    year: 20180824
  )
  always_never_2018.cover_art.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/always_never/albums/Always_Never_(2018)/always_never_2018_cover_art.jpg"), filename: "always_never_2018_cover_art.jpg")

      canadian_dubai = always_never_2018.songs.create(
        song_name: "Canadian Dubai",
        year: always_never_2018.year
      )
      canadian_dubai.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/always_never/albums/Always_Never_(2018)/1_Canadian_Dubai.mp3"), filename: "1_Canadian_Dubai.mp3")

      wylin = always_never_2018.songs.create(
        song_name: "Wylin'",
        year: always_never_2018.year,
        explicit: true
      )
      wylin.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/always_never/albums/Always_Never_(2018)/2_Wylin'.mp3"), filename: "2_Wylin'.mp3")

      worst = always_never_2018.songs.create(
        song_name: "Worst",
        year: always_never_2018.year
      )
      worst.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/always_never/albums/Always_Never_(2018)/3_Worst.mp3"), filename: "3_Worst.mp3")

      ruok = always_never_2018.songs.create(
        song_name: "Ruok",
        year: always_never_2018.year,
        explicit: true
      )
      ruok.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/always_never/albums/Always_Never_(2018)/4_Ruok.mp3"), filename: "4_Ruok.mp3")

      hopeless = always_never_2018.songs.create(
        song_name: "Hopeless",
        year: always_never_2018.year
      )
      hopeless.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/always_never/albums/Always_Never_(2018)/5_Hopeless.mp3"), filename: "5_Hopeless.mp3")

      dangerous = always_never_2018.songs.create(
        song_name: "Dangerous",
        year: always_never_2018.year
      )
      dangerous.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/always_never/albums/Always_Never_(2018)/6_Dangerous.mp3"), filename: "6_Dangerous.mp3")

      no_good = always_never_2018.songs.create(
        song_name: "No Good",
        year: always_never_2018.year
      )
      no_good.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/always_never/albums/Always_Never_(2018)/7_No_Good.mp3"), filename: "7_No_Good.mp3")

      cant_imagine = always_never_2018.songs.create(
        song_name: "Can't Imagine",
        year: always_never_2018.year
      )
      cant_imagine.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/always_never/albums/Always_Never_(2018)/8_Can't_Imagine.mp3"), filename: "8_Can't_Imagine.mp3")

      return_to_sender = always_never_2018.songs.create(
        song_name: "Return to Sender",
        year: always_never_2018.year
      )
      return_to_sender.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/always_never/albums/Always_Never_(2018)/9_Return_to_Sender.mp3"), filename: "9_Return_to_Sender.mp3")

      call_me_over = always_never_2018.songs.create(
        song_name: "Call Me Over",
        year: always_never_2018.year
      )
      call_me_over.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/always_never/albums/Always_Never_(2018)/10_Call_Me_Over.mp3"), filename: "10_Call_Me_Over.mp3")

      morgan_freeman = always_never_2018.songs.create(
        song_name: "Morgan Freeman",
        year: always_never_2018.year
      )
      morgan_freeman.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/always_never/albums/Always_Never_(2018)/11_Morgan_Freeman.mp3"), filename: "11_Morgan_Freeman.mp3")

      millions = always_never_2018.songs.create(
        song_name: "Millions",
        year: always_never_2018.year
      )
      millions.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/always_never/albums/Always_Never_(2018)/12_Millions.mp3"), filename: "12_Millions.mp3")

      know_this = always_never_2018.songs.create(
        song_name: "Know This",
        year: always_never_2018.year
      )
      know_this.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/always_never/albums/Always_Never_(2018)/13_Know_This.mp3"), filename: "13_Know_This.mp3")

      feel_it = always_never_2018.songs.create(
        song_name: "Feel It",
        year: always_never_2018.year
      )
      feel_it.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/always_never/albums/Always_Never_(2018)/14_Feel_It.mp3"), filename: "14_Feel_It.mp3")

  # Seal (1991)
  seal_1991 = seal.albums.create(
    album_name: 'Seal',
    year: 19910524
  )
  seal_1991.cover_art.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/seal/albums/Seal_(1991)/seal_1991_cover_art.jpg"), filename: "seal_1991_cover_art.jpg")

      the_beginning = seal_1991.songs.create(
        song_name: "The Beginning",
        year: seal_1991.year
      )
      the_beginning.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/seal/albums/Seal_(1991)/1_The_Beginning.mp3"), filename: "1_The_Beginning.mp3")

      deep_water = seal_1991.songs.create(
        song_name: "Deep Water",
        year: seal_1991.year
      )
      deep_water.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/seal/albums/Seal_(1991)/2_Deep_Water.mp3"), filename: "2_Deep_Water.mp3")

      crazy = seal_1991.songs.create(
        song_name: "Crazy",
        year: seal_1991.year
      )
      crazy.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/seal/albums/Seal_(1991)/3_Crazy.mp3"), filename: "3_Crazy.mp3")

      killer = seal_1991.songs.create(
        song_name: "Killer",
        year: seal_1991.year
      )
      killer.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/seal/albums/Seal_(1991)/4_Killer.mp3"), filename: "4_Killer.mp3")

      whirlpool = seal_1991.songs.create(
        song_name: "Whirlpool",
        year: seal_1991.year
      )
      whirlpool.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/seal/albums/Seal_(1991)/5_Whirlpool.mp3"), filename: "5_Whirlpool.mp3")

      future_love_paradise = seal_1991.songs.create(
        song_name: "Future Love Paradise",
        year: seal_1991.year
      )
      future_love_paradise.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/seal/albums/Seal_(1991)/6_Future_Love_Paradise.mp3"), filename: "6_Future_Love_Paradise.mp3")

      wild = seal_1991.songs.create(
        song_name: "Wild",
        year: seal_1991.year
      )
      wild.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/seal/albums/Seal_(1991)/7_Wild.mp3"), filename: "7_Wild.mp3")

      show_me = seal_1991.songs.create(
        song_name: "Show Me",
        year: seal_1991.year
      )
      show_me.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/seal/albums/Seal_(1991)/8_Show_Me.mp3"), filename: "8_Show_Me.mp3")

      violet = seal_1991.songs.create(
        song_name: "Violet",
        year: seal_1991.year
      )
      violet.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/seal/albums/Seal_(1991)/9_Violet.mp3"), filename: "9_Violet.mp3")

  # Seal (1994)
  seal_1994 = seal.albums.create(
    album_name: 'Seal',
    year: 19940523
  )
  seal_1994.cover_art.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/seal/albums/Seal_(1994)/seal_1994_cover_art.jpg"), filename: "seal_1994_cover_art.jpg")

      bring_it_on = seal_1994.songs.create(
        song_name: "Bring It On",
        year: seal_1994.year
      )
      bring_it_on.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/seal/albums/Seal_(1994)/1_Bring_It_On.mp3"), filename: "1_Bring_It_On.mp3")

      prayer_for_the_dying = seal_1994.songs.create(
        song_name: "Prayer for the Dying",
        year: seal_1994.year
      )
      prayer_for_the_dying.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/seal/albums/Seal_(1994)/2_Prayer_for_the_Dying.mp3"), filename: "2_Prayer_for_the_Dying.mp3")

      dreaming_in_metaphors = seal_1994.songs.create(
        song_name: "Dreaming in Metaphors",
        year: seal_1994.year
      )
      dreaming_in_metaphors.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/seal/albums/Seal_(1994)/3_Dreaming_in_Metaphors.mp3"), filename: "3_Dreaming_in_Metaphors.mp3")

      dont_cry = seal_1994.songs.create(
        song_name: "Don't Cry",
        year: seal_1994.year
      )
      dont_cry.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/seal/albums/Seal_(1994)/4_Don't_Cry.mp3"), filename: "4_Don't_Cry.mp3")

      fast_changes = seal_1994.songs.create(
        song_name: "Fast Changes",
        year: seal_1994.year
      )
      fast_changes.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/seal/albums/Seal_(1994)/5_Fast_Changes.mp3"), filename: "5_Fast_Changes.mp3")

      kiss_from_a_rose = seal_1994.songs.create(
        song_name: "Kiss from a Rose",
        year: seal_1994.year
      )
      kiss_from_a_rose.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/seal/albums/Seal_(1994)/6_Kiss_from_a_Rose.mp3"), filename: "6_Kiss_from_a_Rose.mp3")

      people_asking_why = seal_1994.songs.create(
        song_name: "People Asking Why",
        year: seal_1994.year
      )
      people_asking_why.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/seal/albums/Seal_(1994)/7_People_Asking_Why.mp3"), filename: "7_People_Asking_Why.mp3")

      newborn_friend = seal_1994.songs.create(
        song_name: "Newborn Friend",
        year: seal_1994.year
      )
      newborn_friend.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/seal/albums/Seal_(1994)/8_Newborn_Friend.mp3"), filename: "8_Newborn_Friend.mp3")

      if_i_could = seal_1994.songs.create(
        song_name: "If I Could",
        year: seal_1994.year
      )
      if_i_could.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/seal/albums/Seal_(1994)/9_If_I_Could.mp3"), filename: "9_If_I_Could.mp3")

      im_alive = seal_1994.songs.create(
        song_name: "I'm Alive",
        year: seal_1994.year
      )
      im_alive.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/seal/albums/Seal_(1994)/10_I'm_Alive.mp3"), filename: "10_I'm_Alive.mp3")

      bring_it_on_reprise = seal_1994.songs.create(
        song_name: "Bring It On - Reprise",
        year: seal_1994.year
      )
      bring_it_on_reprise.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/seal/albums/Seal_(1994)/11_Bring_It_On_(reprise).mp3"), filename: "11_Bring_It_On_(reprise).mp3")

  # PLAYLISTS
  # 90's Hits
  seal_hits = guest.playlists.create(
    playlist_name: 'Seal Hits'
  )
  seal_hits.songs.push(the_beginning, crazy, violet, bring_it_on, prayer_for_the_dying, kiss_from_a_rose)

  classic_mariah = guest.playlists.create(
    playlist_name: 'Classic Mariah'
  )
  classic_mariah.songs.push(hateu, ill_be_lovin_u_long_time, cruise_control, touch_my_body, obsessed, for_the_record)

end
