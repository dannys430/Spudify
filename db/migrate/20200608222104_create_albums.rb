class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.string :album_name, null: false
      t.date :year, null: false
      t.integer :artist_id, null: false
      t.boolean :explicit, null: false, default: false

      t.timestamps
    end
    add_index :albums, :album_name
    add_index :albums, :artist_id
  end
end
