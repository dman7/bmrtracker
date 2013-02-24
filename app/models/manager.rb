class Manager < ActiveRecord::Base
  attr_accessible :name, :phone_number, :website, :email, :address
end
