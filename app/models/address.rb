class Address < ActiveRecord::Base
  validates :city, :state, :zip, presence: true
end
