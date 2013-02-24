class AddAddressToManagers < ActiveRecord::Migration
  def change
    add_column :managers, :address, :string
  end
end
