require 'csv'

csv_file = File.read('seed_data.csv')
csv_file2 = File.read('seed_data_mgr.csv')

puts "Parsing CSV file..."
csv = CSV.parse(csv_file, headers: false)
csv_managers = CSV.parse(csv_file2, headers: false)
puts "Parsing CSV file done"

puts "Creating properties..."
csv.each do |row|
  property_status = row[8]

  # We only need properties in rental status
  if property_status == "Rental"
    property = Property.new(name: row[1], 
                            address: row[2] + " " + row[3],
                            city: "San Francisco",
                            zipcode: row[4],
                            total_units:  row[9],
                            total_bmr: row[10],
                            neighborhood: row[12])
    property.save
  end
end
puts "Properties saved correctly"

puts "Creating managers..."
csv_managers.each do |row|

  manager = Manager.new(name: row[0], 
                          phone_number: row[1],
                          address: row[2],
                          email: row[3])
  manager.save
end
puts "Managers saved correctly"
