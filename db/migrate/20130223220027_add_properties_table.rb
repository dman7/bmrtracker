class AddPropertiesTable < ActiveRecord::Migration
  def change
    create_table :properties do |t|
      t.string :name
      t.string :city
      t.string :address
      t.string :zipcode
      t.text :comments
      t.float :price
      t.integer :bedrooms
      t.integer :bathrooms
      t.float :square_footage


      # For Google Maps API
      t.float :latitude
      t.float :longitude

      t.timestamps
    end
  end
end
