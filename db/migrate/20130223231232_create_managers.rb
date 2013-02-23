class CreateManagers < ActiveRecord::Migration
  def change
    create_table :managers do |t|
      t.string :name
      t.string :phone_number
      t.string :website
      t.string :email

      t.timestamps
    end
  end
end
