CityFinder.Views.ZipForm = Backbone.View.extend({
  template: JST['form'],
  tagName: 'form',

  events: {
    'click .zipcode': 'clear',
    'submit': 'search'
  },

  clear: function () {
    this.$('.zipcode').val('');
  },

  search: function (event) {
    event.preventDefault()
    var $search = $('form')
    var zipcode = $search.find('.zipcode').val()
    console.log(zipcode);
    CityFinder.addresses.fetch({data: {zip: zipcode}})

  },


  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }



})
