# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
file = File.read('./public/zipcodes.json')
data = JSON.parse(file)

data.each do |hash|
  city = nil
  state = nil
  zip = nil

  hash.each do |key, value|
  	 if key == 'zipcode'
       zip = value
     elsif key == 'city'
       city = value
     elsif key =='state'
       state = value
   	 end
	end

  if !city.nil? && !state.nil? && !zip.nil?
    Address.create!({city: city, state: state, zip: zip})
  end
end
