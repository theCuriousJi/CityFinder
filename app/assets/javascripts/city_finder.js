window.CityFinder = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new CityFinder.Routers.Router({$rootEl:$("#main")});
    Backbone.history.start();
  }
};

$(document).ready(function(){
});
