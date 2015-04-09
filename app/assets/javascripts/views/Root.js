CityFinder.Views.Root = Backbone.View.extend({
  template: JST['root'],

  initialize: function (options) {
    this.collection = CityFinder.addresses
    this.listenTo(this.collection, 'sync', this.showResults)
  },

  addForm: function () {
    var view = new CityFinder.Views.ZipForm()
    this.$('.zip-form').append(view.render().$el)
  },

  showResults: function () {
    var view = new CityFinder.Views.Results({collection: this.collection })
    this.$('.results').html(view.render().$el)

  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.addForm();
    return this;
  }


})
