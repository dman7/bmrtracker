class AddAttributesToProperty < ActiveRecord::Migration
  def change
    add_column :properties, :total_units, :integer
    add_column :properties, :total_bmr, :integer
    add_column :properties, :neighborhood, :string
  end
end
