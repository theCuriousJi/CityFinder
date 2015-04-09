CityFinder.Views.Results = Backbone.View.extend({
  template: JST['results'],
  emptyTemplate: JST['empty'],


  render: function () {
    if (this.collection.length < 1) {
      var content = this.emptyTemplate()
    } else {
      var content = this.template({address: this.collection.first()})
    }
    this.$el.html(content)
    return this;
  }



})
