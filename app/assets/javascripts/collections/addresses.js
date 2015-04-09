CityFinder.Collections.Addresses = Backbone.Collection.extend({
  url: 'api/addresses'

})

CityFinder.addresses = new CityFinder.Collections.Addresses()
