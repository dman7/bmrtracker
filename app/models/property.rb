class Property < ActiveRecord::Base

  attr_accessible :name, :city, :address, :zipcode, :comments, :price, :bedrooms, :bathrooms, :square_footage, :latitude, :longitude,
                  :total_units, :total_bmr, :neighborhood

end
