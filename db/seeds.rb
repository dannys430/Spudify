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

  # Amanda Lepore
  amanda_lepore = Artist.create(
    artist_name: 'Amanda Lepore' 
  )
  amanda_lepore.cover_photo.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/amanda_lepore/amanda_lepore_cover_photo.jpg"), filename: "amanda_lepore_cover_photo.jpg")

  # Charlie Puth
  charlie_puth = Artist.create(
    artist_name: 'Charlie Puth' 
  )
  charlie_puth.cover_photo.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/charlie_puth/charlie_puth_cover_photo.jpg"), filename: "charlie_puth_cover_photo.jpg")

  # Cyril Hahn
  cyril_hahn = Artist.create(
    artist_name: 'Cyril Hahn' 
  )
  cyril_hahn.cover_photo.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/cyril_hahn/cyril_hahn_cover_photo.jpg"), filename: "cyril_hahn_cover_photo.jpg")

  # Janet Jackson
  janet_jackson = Artist.create(
    artist_name: 'Janet Jackson' 
  )
  janet_jackson.cover_photo.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/janet_jackson/janet_jackson_cover_photo.jpg"), filename: "janet_jackson_cover_photo.jpg")

  # JoJo
  jojo = Artist.create(
    artist_name: 'JoJo' 
  )
  jojo.cover_photo.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/jojo/jojo_cover_photo.jpg"), filename: "jojo_cover_photo.jpg")

  # Katy Perry
  katy_perry = Artist.create(
    artist_name: 'Katy Perry' 
  )
  katy_perry.cover_photo.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/katy_perry/katy_perry_cover_photo.jpg"), filename: "katy_perry_cover_photo.jpg")

  # Maverick Sabre
  maverick_sabre = Artist.create(
    artist_name: 'Maverick Sabre' 
  )
  # no cover photo
  # maverick_sabre.cover_photo.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/maverick_sabre/maverick_sabre_cover_photo.jpg"), filename: "maverick_sabre_cover_photo.jpg")

  # Natasha Bedingfield
  natasha_bedingfield = Artist.create(
    artist_name: 'Natasha Bedingfield' 
  )
  natasha_bedingfield.cover_photo.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/natasha_bedingfield/natasha_bedingfield_cover_photo.jpg"), filename: "natasha_bedingfield_cover_photo.jpg")

  # Selena Gomez
  selena_gomez = Artist.create(
    artist_name: 'Selena Gomez' 
  )
  selena_gomez.cover_photo.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/selena_gomez/selena_gomez_cover_photo.jpg"), filename: "selena_gomez_cover_photo.jpg")

  # Mýa
  mya = Artist.create(
    artist_name: 'Mýa' 
  )
  mya.cover_photo.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/my%CC%81a/mya_cover_photo.jpg"), filename: "mya_cover_photo.jpg")

  # Stacie Orrico
  stacie_orrico = Artist.create(
    artist_name: 'Stacie Orrico' 
  )
  # no cover photo

  # Ashanti
  ashanti = Artist.create(
    artist_name: 'Ashanti' 
  )
  ashanti.cover_photo.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/ashanti/ashanti_cover_photo.jpg"), filename: "ashanti_cover_photo.jpg")

  # Elderbrook
  elderbrook = Artist.create(
    artist_name: 'Elderbrook' 
  )
  elderbrook.cover_photo.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/elderbrook/elderbrook_cover_photo.jpg"), filename: "elderbrook_cover_photo.jpg")

  # Adele
  adele = Artist.create(
    artist_name: 'Adele' 
  )
  adele.cover_photo.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/adele/adele_cover_photo.jpg"), filename: "adele_cover_photo.jpg")

  # Justin Timberlake
  justin_timberlake = Artist.create(
    artist_name: 'Justin Timberlake' 
  )
  justin_timberlake.cover_photo.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/justin_timberlake/justin_timberlake_cover_photo.jpg"), filename: "justin_timberlake_cover_photo.jpg")

  # Friendly Fires
  friendly_fires = Artist.create(
    artist_name: 'Friendly Fires' 
  )
  friendly_fires.cover_photo.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/friendly_fires/friendly_fires_cover_photo.jpg"), filename: "friendly_fires_cover_photo.jpg")

  # TLC
  tlc = Artist.create(
    artist_name: 'TLC' 
  )
  tlc.cover_photo.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/tlc/tlc_cover_photo.jpg"), filename: "tlc_cover_photo.jpg")

  # Bazzi
  bazzi = Artist.create(
    artist_name: 'Bazzi' 
  )
  bazzi.cover_photo.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/bazzi/bazzi_cover_photo.jpg"), filename: "bazzi_cover_photo.jpg")

  # Kelsey Lu
  kelsey_lu = Artist.create(
    artist_name: 'Kelsey Lu' 
  )
  kelsey_lu.cover_photo.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/kelsey_lu/kelsey_lu_cover_photo.jpg"), filename: "kelsey_lu_cover_photo.jpg")

  # Ben Delay
  ben_delay = Artist.create(
    artist_name: 'Ben Delay' 
  )
  ben_delay.cover_photo.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/ben_delay/ben_delay_cover_photo.jpg"), filename: "ben_delay_cover_photo.jpg")

  # Le Youth
  le_youth = Artist.create(
    artist_name: 'Le Youth' 
  )
  le_youth.cover_photo.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/le_youth/le_youth_cover_photo.jpg"), filename: "le_youth_cover_photo.jpg")

  # Rudimental
  rudimental = Artist.create(
    artist_name: 'Rudimental' 
  )
  rudimental.cover_photo.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/rudimental/rudimental_cover_photo.jpg"), filename: "rudimental_cover_photo.jpg")

  # Coldplay
  coldplay = Artist.create(
    artist_name: 'Coldplay' 
  )
  coldplay.cover_photo.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/coldplay/coldplay_cover_photo.jpg"), filename: "coldplay_cover_photo.jpg")

  # Catching Flies
  catching_flies = Artist.create(
    artist_name: 'Catching Flies' 
  )
  catching_flies.cover_photo.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/catching_flies/catching_flies_cover_photo.jpg"), filename: "catching_flies_cover_photo.jpg")

  # Dylan Sitts
  dylan_sitts = Artist.create(
    artist_name: 'Dylan Sitts' 
  )
  dylan_sitts.cover_photo.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/dylan_sitts/dylan_sitts_cover_photo.jpg"), filename: "dylan_sitts_cover_photo.jpg")

  # Jhené Aiko
  jhene_aiko = Artist.create(
    artist_name: 'Jhené Aiko' 
  )
  jhene_aiko.cover_photo.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/jhene_aiko/jhene_aiko_cover_photo.jpg"), filename: "jhene_aiko_cover_photo.jpg")

  # Sting
  sting = Artist.create(
    artist_name: 'Sting' 
  )
  sting.cover_photo.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/sting/sting_cover_photo.jpg"), filename: "sting_cover_photo.jpg")

  # Carly Rae Jepsen
  carly_rae_jepsen = Artist.create(
    artist_name: 'Carly Rae Jepsen' 
  )
  carly_rae_jepsen.cover_photo.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/carly_rae_jepsen/carly_rae_jepsen_cover_photo.jpg"), filename: "carly_rae_jepsen_cover_photo.jpg")

  # Miley Cyrus
  miley_cyrus = Artist.create(
    artist_name: 'Miley Cyrus' 
  )
  miley_cyrus.cover_photo.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/miley_cyrus/miley_cyrus_cover_photo.jpg"), filename: "miley_cyrus_cover_photo.jpg")

  # Lil Wayne
  lil_wayne = Artist.create(
    artist_name: 'Lil Wayne' 
  )
  lil_wayne.cover_photo.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/lil_wayne/lil_wayne_cover_photo.jpg"), filename: "lil_wayne_cover_photo.jpg")

  # ZAYN
  zayn = Artist.create(
    artist_name: 'ZAYN' 
  )
  zayn.cover_photo.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/zayn/zayn_cover_photo.jpg"), filename: "zayn_cover_photo.jpg")

  # Daniel Bedingfield
  daniel_bedingfield = Artist.create(
    artist_name: 'Daniel Bedingfield' 
  )
  daniel_bedingfield.cover_photo.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/daniel_bedingfield/daniel_bedingfield_cover_photo.jpg"), filename: "daniel_bedingfield_cover_photo.jpg")

  # Peter Bark
  peter_bark = Artist.create(
    artist_name: 'Peter Bark' 
  )
  peter_bark.cover_photo.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/peter_bark/peter_bark_cover_photo.jpg"), filename: "peter_bark_cover_photo.jpg")



  # ALBUMS
  # The Emancipation of Mimi
  the_emancipation_of_mimi = mariah_carey.albums.create(
    album_name: 'The Emancipation of Mimi',
    year: 20050412
  )
  the_emancipation_of_mimi.cover_art.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/mariah_carey/albums/The_Emancipation_of_Mimi/the_emancipation_of_mimi_cover_art.jpg"), filename: "the_emancipation_of_mimi_cover_art.jpg")

      we_belong_together = the_emancipation_of_mimi.songs.create(
        song_name: "We Belong Together",
        year: the_emancipation_of_mimi.year
      )
      we_belong_together.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/mariah_carey/albums/The_Emancipation_of_Mimi/1_We_Belong_Together.mp3"), filename: "1_We_Belong_Together.mp3")
  
      shake_it_off = the_emancipation_of_mimi.songs.create(
        song_name: "Shake It Off",
        year: the_emancipation_of_mimi.year
      )
      shake_it_off.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/mariah_carey/albums/The_Emancipation_of_Mimi/2_Shake_It_Off.mp3"), filename: "2_Shake_It_Off.mp3")
  
  # Don't Forget About Us (Quentin Harris Shelter Mix)
  dont_forget_about_us_quentin_harris_shelter_mix_album = mariah_carey.albums.create(
    album_name: "Don't Forget About Us (Quentin Harris Shelter Mix)",
    year: 20051212
  )
  dont_forget_about_us_quentin_harris_shelter_mix_album.cover_art.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/mariah_carey/albums/Don't_Forget_About_Us_(Quentin_Harris_Shelter_Mix)/don't_forget_about_us_(quentin_shelter_anthem_mix)_cover_art.jpg"), filename: "don't_forget_about_us_(quentin_shelter_anthem_mix)_cover_art.jpg")

      dont_forget_about_us_quentin_harris_shelter_mix = dont_forget_about_us_quentin_harris_shelter_mix_album.songs.create(
        song_name: "Don't Forget About Us (Quentin Harris Shelter Mix)",
        year: dont_forget_about_us_quentin_harris_shelter_mix_album.year
      )
      dont_forget_about_us_quentin_harris_shelter_mix.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/mariah_carey/albums/Don't_Forget_About_Us_(Quentin_Harris_Shelter_Mix)/1_Don't_Forget_About_Us_(Quentin_Harris_Shelter_Mix).mp3"), filename: "1_Don't_Forget_About_Us_(Quentin_Harris_Shelter_Mix).mp3")

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

  # Me. I Am Mariah...The Elusive Chanteuse (Deluxe)
  me_i_am_mariah_the_elusive_chanteuse_deluxe = mariah_carey.albums.create(
    album_name: 'Me. I Am Mariah...The Elusive Chanteuse (Deluxe)',
    year: 20140523
  )
  me_i_am_mariah_the_elusive_chanteuse_deluxe.cover_art.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/mariah_carey/albums/Me._I_Am_Mariah...The_Elusive_Chanteuse_(Deluxe)/me._i_am_mariah...the_elusive_chanteuse_(deluxe)_cover_art.jpg"), filename: "me._i_am_mariah...the_elusive_chanteuse_(deluxe)_cover_art.jpg")

      supernatural = me_i_am_mariah_the_elusive_chanteuse_deluxe.songs.create(
        song_name: "Supernatural",
        year: me_i_am_mariah_the_elusive_chanteuse_deluxe.year
      )
      supernatural.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/mariah_carey/albums/Me._I_Am_Mariah...The_Elusive_Chanteuse_(Deluxe)/1_Supernatural.mp3"), filename: "1_Supernatural.mp3")

  # Caution
  caution_album = mariah_carey.albums.create(
    album_name: 'Caution',
    year: 20181116
  )
  caution_album.cover_art.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/mariah_carey/albums/Caution/caution_cover_art.jpg"), filename: "caution_cover_art.jpg")

      gtfo = caution_album.songs.create(
        song_name: "GTFO",
        year: caution_album.year
      )
      gtfo.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/mariah_carey/albums/Caution/1_GTFO.mp3"), filename: "1_GTFO.mp3")

      caution = caution_album.songs.create(
        song_name: "Caution",
        year: caution_album.year
      )
      caution.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/mariah_carey/albums/Caution/3_Caution.mp3"), filename: "3_Caution.mp3")

      a_no_no = caution_album.songs.create(
        song_name: "A No No",
        year: caution_album.year
      )
      a_no_no.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/mariah_carey/albums/Caution/4_A_No_No.mp3"), filename: "4_A_No_No.mp3")

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

  # I...Amanda Lepore (Make Over Sessions)
  i_amanda_lepore_make_over_sessions = amanda_lepore.albums.create(
    album_name: 'I...Amanda Lepore (Make Over Sessions)',
    year: 20150731
  )
  i_amanda_lepore_make_over_sessions.cover_art.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/amanda_lepore/albums/I...Amanda_Lepore_(Make_Over_Sessions)/i...amanda_lepore_(make_over_sessions)_cover_art.jpg"), filename: "i...amanda_lepore_(make_over_sessions)_cover_art.jpg")

      my_hair_looks_fierce_feat_cazwell_lost_daze_extended_vocal_remix = i_amanda_lepore_make_over_sessions.songs.create(
        song_name: "My Hair Looks Fierce (feat. Cazwell) [Lost Daze Extended Vocal Remix]",
        year: i_amanda_lepore_make_over_sessions.year
      )
      my_hair_looks_fierce_feat_cazwell_lost_daze_extended_vocal_remix.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/amanda_lepore/albums/I...Amanda_Lepore_(Make_Over_Sessions)/1_My_Hair_Looks_Fierce_(feat._Cazwell)_%5BLost_Daze_Extended_Vocal_Remix%5D.mp3"), filename: "1_My_Hair_Looks_Fierce_(feat._Cazwell)_%5BLost_Daze_Extended_Vocal_Remix%5D.mp3")

  # Girlfriend
  girlfriend_album = charlie_puth.albums.create(
    album_name: 'Girlfriend',
    year: 20200625
  )
  girlfriend_album.cover_art.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/charlie_puth/albums/Girlfriend/girlfriend_cover_art.jpg"), filename: "girlfriend_cover_art.jpg")

      girlfriend = girlfriend_album.songs.create(
        song_name: "Girlfriend",
        year: girlfriend_album.year
      )
      girlfriend.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/charlie_puth/albums/Girlfriend/1_Girlfriend.mp3"), filename: "1_Girlfriend.mp3")

  # Nine Track Mind (Deluxe Edition)
  nine_track_mind_deluxe_edition = charlie_puth.albums.create(
    album_name: 'Nine Track Mind (Deluxe Edition)',
    year: 20160129
  )
  nine_track_mind_deluxe_edition.cover_art.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/charlie_puth/albums/Nine_Track_Mind_(Deluxe_Edition)/nine_track_mind_cover_art.jpg"), filename: "nine_track_mind_cover_art.jpg")

      does_it_feel = nine_track_mind_deluxe_edition.songs.create(
        song_name: "Does It Feel",
        year: nine_track_mind_deluxe_edition.year
      )
      does_it_feel.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/charlie_puth/albums/Nine_Track_Mind_(Deluxe_Edition)/1_Does_It_Feel.mp3"), filename: "1_Does_It_Feel.mp3")

  # Voicenotes
  voicenotes = charlie_puth.albums.create(
    album_name: 'Voicenotes',
    year: 20180511
  )
  voicenotes.cover_art.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/charlie_puth/albums/Voicenotes/voicenotes_cover_art.jpg"), filename: "voicenotes_cover_art.jpg")

      la_girls = voicenotes.songs.create(
        song_name: "LA Girls",
        year: voicenotes.year
      )
      la_girls.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/charlie_puth/albums/Voicenotes/1_LA_Girls.mp3"), filename: "1_LA_Girls.mp3")

  # Perfect Form EP
  perfect_form_ep = cyril_hahn.albums.create(
    album_name: 'Perfect Form EP',
    year: 20130101
  )
  perfect_form_ep.cover_art.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/cyril_hahn/albums/Perfect_Form_EP/perfect_form_ep_cover_art.jpg"), filename: "perfect_form_ep_cover_art.jpg")

      perfect_form = perfect_form_ep.songs.create(
        song_name: "Perfect Form",
        year: perfect_form_ep.year
      )
      perfect_form.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/cyril_hahn/albums/Perfect_Form_EP/1_Perfect_Form.mp3"), filename: "1_Perfect_Form.mp3")

  # Voices
  voices = cyril_hahn.albums.create(
    album_name: 'Voices',
    year: 20141014
  )
  voices.cover_art.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/cyril_hahn/albums/Voices/voices_cover_photo.jpg"), filename: "voices_cover_photo.jpg")

      slow = voices.songs.create(
        song_name: "Slow",
        year: voices.year
      )
      slow.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/cyril_hahn/albums/Voices/1_Slow.mp3"), filename: "1_Slow.mp3")

  # All For You
  all_for_you_album = janet_jackson.albums.create(
    album_name: 'All For You',
    year: 20010424
  )
  all_for_you_album.cover_art.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/janet_jackson/albums/All_For_You/all_for_you_cover_art.jpg"), filename: "all_for_you_cover_art.jpg")

      all_for_you = all_for_you_album.songs.create(
        song_name: "All For You",
        year: all_for_you_album.year
      )
      all_for_you.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/janet_jackson/albums/All_For_You/1_All_For_You.mp3"), filename: "1_All_For_You.mp3")
      
  # The High Road
  the_high_road = jojo.albums.create(
    album_name: 'The High Road',
    year: 20061017
  )
  the_high_road.cover_art.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/jojo/albums/The_High_Road/the_high_road_cover_art.jpg"), filename: "the_high_road_cover_art.jpg")

      too_little_too_late = the_high_road.songs.create(
        song_name: "Too Little Too Late",
        year: the_high_road.year
      )
      too_little_too_late.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/jojo/albums/The_High_Road/3_Too_Little_Too_Late.mp3"), filename: "3_Too_Little_Too_Late.mp3")

  # Witness (Deluxe)
  witness_deluxe = katy_perry.albums.create(
    album_name: 'Witness (Deluxe)',
    year: 20170609
  )
  witness_deluxe.cover_art.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/katy_perry/albums/Witness_(Deluxe)/witness_(deluxe)_cover_art.jpg"), filename: "witness_(deluxe)_cover_art.jpg")

      bon_appetit = witness_deluxe.songs.create(
        song_name: "Bon appétit",
        year: witness_deluxe.year
      )
      bon_appetit.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/katy_perry/albums/Witness_(Deluxe)/11_Bon_appe%CC%81tit.mp3"), filename: "11_Bon_appe%CC%81tit.mp3")

  # 365
  three_sixty_five_album = katy_perry.albums.create(
    album_name: '365',
    year: 20190214
  )
  three_sixty_five_album.cover_art.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/katy_perry/albums/365_(Feat.+Zedd)/365_cover_art.jpg"), filename: "365_cover_art.jpg")

      three_sixty_five = three_sixty_five_album.songs.create(
        song_name: "365",
        year: three_sixty_five_album.year
      )
      three_sixty_five.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/katy_perry/albums/365_(Feat.+Zedd)/1_365_(feat.+Zedd).mp3"), filename: "1_365_(feat.+Zedd).mp3")

  # Harleys In Hawaii
  harleys_in_hawaii_album = katy_perry.albums.create(
    album_name: 'Harleys In Hawaii',
    year: 20191016
  )
  harleys_in_hawaii_album.cover_art.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/katy_perry/albums/Harleys_In_Hawaii/harleys_in_hawaii_cover_art.jpg"), filename: "harleys_in_hawaii_cover_art.jpg")

      harleys_in_hawaii = harleys_in_hawaii_album.songs.create(
        song_name: "Harleys In Hawaii",
        year: harleys_in_hawaii_album.year
      )
      harleys_in_hawaii.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/katy_perry/albums/Harleys_In_Hawaii/1_Harleys_In_Hawaii.mp3"), filename: "1_Harleys_In_Hawaii.mp3")

  # I Need (Luis Leon Blue Sky Edit)
  i_need_luis_leon_blue_sky_edit_album = maverick_sabre.albums.create(
    album_name: 'I Need (Luis Leon Blue Sky Edit)',
    year: 20130712
  )
  # no cover art
  # i_need_luis_leon_blue_sky_edit_album.cover_art.attach(io: open(""), filename: "")

      i_need_luis_leon_blue_sky_edit = i_need_luis_leon_blue_sky_edit_album.songs.create(
        song_name: "I Need (Luis Leon Blue Sky Edit)",
        year: i_need_luis_leon_blue_sky_edit_album.year
      )
      i_need_luis_leon_blue_sky_edit.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/maverick_sabre/albums/I_Need_(Luis_Leon_Blue_Sky_Edit)/1_I_Need_(Luis_Leon_Blue_Sky_Edit).mp3"), filename: "1_I_Need_(Luis_Leon_Blue_Sky_Edit).mp3")

  # Unwritten
  unwritten_album = natasha_bedingfield.albums.create(
    album_name: 'Unwritten',
    year: 20050808
  )
  unwritten_album.cover_art.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/natasha_bedingfield/albums/Unwritten/unwritten_cover_art.jpg"), filename: "unwritten_cover_art.jpg")

      unwritten = unwritten_album.songs.create(
        song_name: "Unwritten",
        year: unwritten_album.year
      )
      unwritten.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/natasha_bedingfield/albums/Unwritten/1_Unwritten.mp3"), filename: "1_Unwritten.mp3")

  # Rare (Deluxe)
  rare_deluxe = selena_gomez.albums.create(
    album_name: 'Rare (Deluxe)',
    year: 20200409
  )
  rare_deluxe.cover_art.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/selena_gomez/albums/Rare_(Deluxe)/rare_(deluxe)_cover_art.jpg"), filename: "rare_(deluxe)_cover_art.jpg")

      boyfriend = rare_deluxe.songs.create(
        song_name: "Boyfriend",
        year: rare_deluxe.year
      )
      boyfriend.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/selena_gomez/albums/Rare_(Deluxe)/1_Boyfriend.mp3"), filename: "1_Boyfriend.mp3")

  # Moodring
  moodring = mya.albums.create(
    album_name: 'Moodring',
    year: 20030626
  )
  moodring.cover_art.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/my%CC%81a/albums/Moodring/moodring_cover_art.jpg"), filename: "moodring_cover_art.jpg")

      my_love_is_like_wo = moodring.songs.create(
        song_name: "My Love Is Like...Wo",
        year: moodring.year
      )
      my_love_is_like_wo.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/my%CC%81a/albums/Moodring/1_My_Love_Is_Like...Wo.mp3"), filename: "1_My_Love_Is_Like...Wo.mp3")
      
  # Stacie Orrico
  stacie_orrico_2003 = stacie_orrico.albums.create(
    album_name: 'Stacie Orrico',
    year: 20030325
  )
  stacie_orrico_2003.cover_art.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/stacie_orrico/albums/Stacie_Orrico_(2003)/stacie_orrico_(2003)_cover_art.jpg"), filename: "stacie_orrico_(2003)_cover_art.jpg")

      stuck = stacie_orrico_2003.songs.create(
        song_name: "Stuck",
        year: stacie_orrico_2003.year
      )
      stuck.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/stacie_orrico/albums/Stacie_Orrico_(2003)/1_Stuck.mp3"), filename: "1_Stuck.mp3")

  # Chapter II
  chapter_ii = ashanti.albums.create(
    album_name: 'Chapter II',
    year: 20030701
  )
  chapter_ii.cover_art.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/ashanti/albums/Chapter_II/chapter_ii_cover_art.jpg"), filename: "chapter_ii_cover_art.jpg")

      rock_wit_u_awww_baby = chapter_ii.songs.create(
        song_name: "Rock Wit U (Awww Baby)",
        year: chapter_ii.year
      )
      rock_wit_u_awww_baby.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/ashanti/albums/Chapter_II/3_Rock_Wit_U_(Awww+Baby).mp3"), filename: "3_Rock_Wit_U_(Awww+Baby).mp3")

  # Something About You (with Rudimental)
  something_about_you_with_rudimental_album = elderbrook.albums.create(
    album_name: 'Something About You (with Rudimental)',
    year: 20190809
  )
  something_about_you_with_rudimental_album.cover_art.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/elderbrook/albums/Something_About_You_(with_Rudimental)/something_about_you_(with_rudimental)_cover_art.jpg"), filename: "something_about_you_(with_rudimental)_cover_art.jpg")

      something_about_you_with_rudimental = something_about_you_with_rudimental_album.songs.create(
        song_name: "Something About You (with Rudimental)",
        year: something_about_you_with_rudimental_album.year
      )
      something_about_you_with_rudimental.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/elderbrook/albums/Something_About_You_(with_Rudimental)/1_Something_About_You_(With_Rudimental).mp3"), filename: "1_Something_About_You_(With_Rudimental).mp3")

  # Hello (Paul Damixie Remix)
  hello_paul_damixie_remix_album = adele.albums.create(
    album_name: 'Hello (Paul Damixie Remix)',
    year: 20150101
  )
  hello_paul_damixie_remix_album.cover_art.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/adele/albums/Hello_(Paul_Damixie_Remix)/hello_(paul_damixie_remix)_cover_art.jpg"), filename: "hello_(paul_damixie_remix)_cover_art.jpg")

      hello_paul_damixie_remix = hello_paul_damixie_remix_album.songs.create(
        song_name: "Hello (Paul Damixie Remix)",
        year: hello_paul_damixie_remix_album.year
      )
      hello_paul_damixie_remix.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/adele/albums/Hello_(Paul_Damixie_Remix)/1_Hello_(Paul_Damixie_Remix).mp3"), filename: "1_Hello_(Paul_Damixie_Remix).mp3")

  # 12" Masters - The Essential Mixes
  twelve_inch_masters_the_essential_mixes = justin_timberlake.albums.create(
    album_name: '12" Masters - The Essential Mixes',
    year: 20100917
  )
  twelve_inch_masters_the_essential_mixes.cover_art.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/justin_timberlake/albums/12_Inch_Masters-The_Essential_Mixes/12_inch_masters-the_essential_mixes.jpg"), filename: "12_inch_masters-the_essential_mixes.jpg")

      rock_your_body_paul_oakenfold_mix = twelve_inch_masters_the_essential_mixes.songs.create(
        song_name: "Rock Your Body - Paul Oakenfold Mix",
        year: twelve_inch_masters_the_essential_mixes.year
      )
      rock_your_body_paul_oakenfold_mix.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/justin_timberlake/albums/12_Inch_Masters-The_Essential_Mixes/4_Rock_Your_Body-Paul_Oakenfold_Mix.mp3"), filename: "4_Rock_Your_Body-Paul_Oakenfold_Mix.mp3")

  # Paris
  paris_album = friendly_fires.albums.create(
    album_name: 'Paris',
    year: 20080901
  )
  paris_album.cover_art.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/friendly_fires/albums/Paris/paris_(aeroplane_remix)_cover_art.jpg"), filename: "paris_(aeroplane_remix)_cover_art.jpg")

      paris_aeroplane_remix = paris_album.songs.create(
        song_name: "Paris (Aeroplane Remix)",
        year: paris_album.year
      )
      paris_aeroplane_remix.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/friendly_fires/albums/Paris/1_Paris_(Aeroplane_Remix).mp3"), filename: "1_Paris_(Aeroplane_Remix).mp3")

  # No Scrubs (Praia Del Sol Remix)
  no_scrubs_praia_del_sol_remix_album = tlc.albums.create(
    album_name: 'No Scrubs (Praia Del Sol Remix)',
    year: 20170101
  )
  no_scrubs_praia_del_sol_remix_album.cover_art.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/tlc/albums/No_Scrubs_(Praia_Del_Sol+Remix)/no_scrubs_(praia_del_sol_remix)_cover_art.jpg"), filename: "no_scrubs_(praia_del_sol_remix)_cover_art.jpg")

      no_scrubs_praia_del_sol_remix = no_scrubs_praia_del_sol_remix_album.songs.create(
        song_name: "No Scrubs (Praia Del Sol Remix)",
        year: no_scrubs_praia_del_sol_remix_album.year
      )
      no_scrubs_praia_del_sol_remix.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/tlc/albums/No_Scrubs_(Praia_Del_Sol+Remix)/1_No_Scrubs_(Praia_Del_Sol_Remix).mp3"), filename: "1_No_Scrubs_(Praia_Del_Sol_Remix).mp3")

  # Beautiful (feat. Camila Cabello) - Bazzi vs. EDX's Ibiza Sunrise Remix
  beautiful_feat_camilla_cabello_bazzi_vs_edx_ibiza_sunrise_remix_album = bazzi.albums.create(
    album_name: "Beautiful (feat. Camila Cabello) - Bazzi vs. EDX's Ibiza Sunrise Remix",
    year: 20180928
  )
  beautiful_feat_camilla_cabello_bazzi_vs_edx_ibiza_sunrise_remix_album.cover_art.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/bazzi/albums/Beautiful_(feat._Camila_Cabello)-Bazzi_vs._EDX's_Ibiza_Sunrise_Remix/beautiful_(feat._camila_cabello)-bazzi_vs._edx's_ibiza_sunrise_remix_cover_art.jpg"), filename: "beautiful_(feat._camila_cabello)-bazzi_vs._edx's_ibiza_sunrise_remix_cover_art.jpg")

      beautiful_feat_camilla_cabello_bazzi_vs_edx_ibiza_sunrise_remix = beautiful_feat_camilla_cabello_bazzi_vs_edx_ibiza_sunrise_remix_album.songs.create(
        song_name: "Beautiful (feat. Camila Cabello) - Bazzi vs. EDX's Ibiza Sunrise Remix",
        year: beautiful_feat_camilla_cabello_bazzi_vs_edx_ibiza_sunrise_remix_album.year
      )
      beautiful_feat_camilla_cabello_bazzi_vs_edx_ibiza_sunrise_remix.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/bazzi/albums/Beautiful_(feat._Camila_Cabello)-Bazzi_vs._EDX's_Ibiza_Sunrise_Remix/1_Beautiful_(feat._Camila_Cabello)-Bazzi_vs._EDX's_Ibiza_Sunrise_Remix.mp3"), filename: "1_Beautiful_(feat._Camila_Cabello)-Bazzi_vs._EDX's_Ibiza_Sunrise_Remix.mp3")

  # Due West (Skrillex Remix)
  due_west_skrillex_remix_album = kelsey_lu.albums.create(
    album_name: "Due West (Skrillex Remix)",
    year: 20191115
  )
  due_west_skrillex_remix_album.cover_art.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/kelsey_lu/albums/Due_West_(Skrillex_Remix)/due_west_(skrillex_remix)_cover_art.jpg"), filename: "due_west_(skrillex_remix)_cover_art.jpg")

      due_west_skrillex_remix = due_west_skrillex_remix_album.songs.create(
        song_name: "Due West (Skrillex Remix)",
        year: due_west_skrillex_remix_album.year
      )
      due_west_skrillex_remix.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/kelsey_lu/albums/Due_West_(Skrillex_Remix)/1_Due_West_(Skrillex_Remix).mp3"), filename: "1_Due_West_(Skrillex_Remix).mp3")

  # The Boy Is Mine (Remixes)
  the_boy_is_mine_remixes = ben_delay.albums.create(
    album_name: "The Boy Is Mine (Remixes)",
    year: 20161014
  )
  the_boy_is_mine_remixes.cover_art.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/ben_delay/albums/The_Boy_Is_Mine_(Remixes)/the_boy_is_mine_(remixes)_cover_art.jpg"), filename: "the_boy_is_mine_(remixes)_cover_art.jpg")

      the_boy_is_mine_radio_edit = the_boy_is_mine_remixes.songs.create(
        song_name: "The Boy Is Mine - Radio Edit",
        year: the_boy_is_mine_remixes.year
      )
      the_boy_is_mine_radio_edit.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/ben_delay/albums/The_Boy_Is_Mine_(Remixes)/4_The_Boy_Is_Mine-Radio_Edit.mp3"), filename: "4_The_Boy_Is_Mine-Radio_Edit.mp3")

  # TOUCH (JackLNDN Remix)
  touch_jacklndn_remix_album = le_youth.albums.create(
    album_name: "TOUCH (JackLNDN Remix)",
    year: 20150518
  )
  touch_jacklndn_remix_album.cover_art.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/le_youth/albums/TOUCH_(JackLNDN+Remix)/touch_(jacklndn_remix)_cover_art.jpg"), filename: "touch_(jacklndn_remix)_cover_art.jpg")

      touch_jacklndn_remix = touch_jacklndn_remix_album.songs.create(
        song_name: "TOUCH (JackLNDN Remix)",
        year: touch_jacklndn_remix_album.year
      )
      touch_jacklndn_remix.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/le_youth/albums/TOUCH_(JackLNDN+Remix)/1_TOUCH_(JackLNDN_Remix).mp3"), filename: "1_TOUCH_(JackLNDN_Remix).mp3")

  # Feel The Love (Kill Paris Remix)
  feel_the_love_kill_paris_remix_album = rudimental.albums.create(
    album_name: "Feel The Love (Kill Paris Remix)",
    year: 20130327
  )
  feel_the_love_kill_paris_remix_album.cover_art.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/rudimental/albums/Feel_The_Love_(Kill_Paris_Remix)/feel_the_love_(kill_paris_remix)_cover_art.jpg"), filename: "feel_the_love_(kill_paris_remix)_cover_art.jpg")

      feel_the_love_kill_paris_remix = feel_the_love_kill_paris_remix_album.songs.create(
        song_name: "Feel The Love (Kill Paris Remix)",
        year: feel_the_love_kill_paris_remix_album.year
      )
      feel_the_love_kill_paris_remix.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/rudimental/albums/Feel_The_Love_(Kill_Paris_Remix)/1_Feel_The_Love_(Kill_Paris_Remix).mp3"), filename: "1_Feel_The_Love_(Kill_Paris_Remix).mp3")

  # Hymn for the Weekend (Seeb Remix)
  hymn_for_the_weekend_seeb_remix_album = coldplay.albums.create(
    album_name: "Hymn for the Weekend (Seeb Remix)",
    year: 20160325
  )
  hymn_for_the_weekend_seeb_remix_album.cover_art.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/coldplay/albums/Hymn_for_the_Weekend_(Seeb_Remix)/hymn_for_the_weekend_(seeb_remix)_cover_art.jpg"), filename: "hymn_for_the_weekend_(seeb_remix)_cover_art.jpg")

      hymn_for_the_weekend_seeb_remix = hymn_for_the_weekend_seeb_remix_album.songs.create(
        song_name: "Hymn for the Weekend (Seeb Remix)",
        year: hymn_for_the_weekend_seeb_remix_album.year
      )
      hymn_for_the_weekend_seeb_remix.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/coldplay/albums/Hymn_for_the_Weekend_(Seeb_Remix)/1_Hymn_for_the_Weekend_(Seeb_Remix).mp3"), filename: "1_Hymn_for_the_Weekend_(Seeb_Remix).mp3")

  # The Stars
  the_stars = catching_flies.albums.create(
    album_name: "The Stars",
    year: 20130826
  )
  the_stars.cover_art.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/catching_flies/albums/The_Stars/the_stars_cover_art.jpg"), filename: "the_stars_cover_art.jpg")

      mt_wolf_life_size_ghosts_catching_flies_remix = the_stars.songs.create(
        song_name: "Mt. Wolf - Life Size Ghosts - Catching Flies Remix",
        year: the_stars.year
      )
      mt_wolf_life_size_ghosts_catching_flies_remix.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/catching_flies/albums/The_Stars/3_Mt._Wolf-Life_Size_Ghosts-Catching_Flies_Remix.mp3"), filename: "3_Mt._Wolf-Life_Size_Ghosts-Catching_Flies_Remix.mp3")

  # Venture
  venture = dylan_sitts.albums.create(
    album_name: "Venture",
    year: 20190807
  )
  venture.cover_art.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/dylan_sitts/albums/Venture/venture_cover_art.jpg"), filename: "venture_cover_art.jpg")

      visitors = venture.songs.create(
        song_name: "Visitors",
        year: venture.year
      )
      visitors.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/dylan_sitts/albums/Venture/14_Visitors.mp3"), filename: "14_Visitors.mp3")

  # Souled Out
  souled_out = jhene_aiko.albums.create(
    album_name: "Souled Out",
    year: 20140909
  )
  souled_out.cover_art.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/jhene_aiko/albums/Souled_Out/souled_out_cover_art.jpg"), filename: "souled_out_cover_art.jpg")

      spotless_mind = souled_out.songs.create(
        song_name: "Spotless Mind",
        year: souled_out.year
      )
      spotless_mind.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/jhene_aiko/albums/Souled_Out/4_Spotless_Mind.mp3"), filename: "4_Spotless_Mind.mp3")

  # Ten Summoner's Tales
  ten_summoners_tales = sting.albums.create(
    album_name: "Ten Summoner's Tales",
    year: 19930309
  )
  ten_summoners_tales.cover_art.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/sting/albums/Ten_Summoner's_Tales/ten_summoner's_tales_cover_art.jpg"), filename: "ten_summoner's_tales_cover_art.jpg")

      fields_of_gold = ten_summoners_tales.songs.create(
        song_name: "Fields Of Gold",
        year: ten_summoners_tales.year
      )
      fields_of_gold.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/sting/albums/Ten_Summoner's_Tales/3_Fields_Of_Gold.mp3"), filename: "3_Fields_Of_Gold.mp3")

  # Emotion
  emotion = carly_rae_jepsen.albums.create(
    album_name: "Emotion",
    year: 20150821
  )
  emotion.cover_art.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/carly_rae_jepsen/albums/Emotion/emotion_cover_art.jpg"), filename: "emotion_cover_art.jpg")

      favourite_colour = emotion.songs.create(
        song_name: "Favourite Colour",
        year: emotion.year
      )
      favourite_colour.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/carly_rae_jepsen/albums/Emotion/15_Favourite_Colour.mp3"), filename: "15_Favourite_Colour.mp3")

  # Bangerz (Deluxe Version)
  bangerz_deluxe_version = miley_cyrus.albums.create(
    album_name: 'Bangerz (Deluxe Version)',
    year: 20130930
  )
  bangerz_deluxe_version.cover_art.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/miley_cyrus/albums/Bangerz_(Deluxe_Version)/bangerz_(deluxe_version)_cover_art.jpg"), filename: "bangerz_(deluxe_version)_cover_art.jpg")

      adore_you = bangerz_deluxe_version.songs.create(
        song_name: "Adore You",
        year: bangerz_deluxe_version.year
      )
      adore_you.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/miley_cyrus/albums/Bangerz_(Deluxe_Version)/1_Adore_You.mp3"), filename: "1_Adore_You.mp3")

  # The Carter IV (Deluxe)
  the_carter_iv_deluxe = lil_wayne.albums.create(
    album_name: 'The Carter IV (Deluxe)',
    year: 20110829
  )
  the_carter_iv_deluxe.cover_art.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/lil_wayne/albums/Tha_Carter_IV_(Deluxe)/tha_carter_iv_(deluxe)_cover_art.jpg"), filename: "tha_carter_iv_(deluxe)_cover_art.jpg")

      how_to_love = the_carter_iv_deluxe.songs.create(
        song_name: "How To Love",
        year: the_carter_iv_deluxe.year
      )
      how_to_love.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/lil_wayne/albums/Tha_Carter_IV_(Deluxe)/12_How_To_Love.mp3"), filename: "12_How_To_Love.mp3")

  # Icarus Falls
  icarus_falls = zayn.albums.create(
    album_name: 'Icarus Falls',
    year: 20181214
  )
  icarus_falls.cover_art.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/zayn/albums/Icarus_Falls/icarus_falls_cover_art.jpg"), filename: "icarus_falls_cover_art.jpg")

      let_me = icarus_falls.songs.create(
        song_name: "Let Me",
        year: icarus_falls.year
      )
      let_me.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/zayn/albums/Icarus_Falls/1_Let_Me.mp3"), filename: "1_Let_Me.mp3")

  # Gotta Get Thru This
  gotta_get_thru_this = daniel_bedingfield.albums.create(
    album_name: 'Gotta Get Thru This',
    year: 20020826
  )
  gotta_get_thru_this.cover_art.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/daniel_bedingfield/albums/Gotta_Get_Thru_This/gotta_get_thru_this_cover_art.jpg"), filename: "gotta_get_thru_this_cover_art.jpg")

      if_youre_not_the_one = gotta_get_thru_this.songs.create(
        song_name: "If You're Not The One",
        year: gotta_get_thru_this.year
      )
      if_youre_not_the_one.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/daniel_bedingfield/albums/Gotta_Get_Thru_This/4_If_You're_Not_The_One.mp3"), filename: "4_If_You're_Not_The_One.mp3")

  # Ochre
  ochre_album = peter_bark.albums.create(
    album_name: 'Ochre',
    year: 20200311
  )
  ochre_album.cover_art.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/peter_bark/albums/Ochre/ochre_cover_art.jpg"), filename: "ochre_cover_art.jpg")

      ochre = ochre_album.songs.create(
        song_name: "Ochre",
        year: ochre_album.year
      )
      ochre.song_file.attach(io: open("https://active-storage-spudify-pro.s3.amazonaws.com/artists/peter_bark/albums/Ochre/1_Ochre.mp3"), filename: "1_Ochre.mp3")





  # PLAYLISTS
  # Pop Hits
  pop_hits = guest.playlists.create(
    playlist_name: 'Pop Hits'
  )
  pop_hits.songs.push(
    caution,
    three_sixty_five,
    a_no_no,
    supernatural,
    la_girls,
    bon_appetit,
    all_for_you,
    unwritten,
    my_love_is_like_wo,
    we_belong_together,
    too_little_too_late,
    rock_wit_u_awww_baby)

  # The Remix
  the_remix = guest.playlists.create(
    playlist_name: 'The Remix'
  )
  the_remix.songs.push(
    hello_paul_damixie_remix, 
    rock_your_body_paul_oakenfold_mix,
    paris_aeroplane_remix,
    no_scrubs_praia_del_sol_remix,
    beautiful_feat_camilla_cabello_bazzi_vs_edx_ibiza_sunrise_remix,
    due_west_skrillex_remix,
    the_boy_is_mine_radio_edit,
    touch_jacklndn_remix,
    feel_the_love_kill_paris_remix,
    hymn_for_the_weekend_seeb_remix,
    mt_wolf_life_size_ghosts_catching_flies_remix)

  # Chill
  chill = guest.playlists.create(
    playlist_name: 'Chill'
  )
  chill.songs.push(
    visitors,
    spotless_mind,
    fields_of_gold,
    favourite_colour,
    adore_you,
    how_to_love,
    let_me,
    if_youre_not_the_one,
    ochre)

  # Mood
  mood = guest.playlists.create(
    playlist_name: 'Mood'
  )
  mood.songs.push(
    wylin,
    does_it_feel,
    something_about_you_with_rudimental,
    slow,
    dont_forget_about_us_quentin_harris_shelter_mix,
    we_belong_together,
    violet)
end
