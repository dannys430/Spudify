class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string :song_name, null: false
      t.date :year, null: false
      t.integer :album_id, null: false
      t.integer :duration, null: false
      t.boolean :explicit, null: false, default: false
    
      t.timestamps
    end
    add_index :songs, :song_name
    add_index :songs, :album_id
  end
end
