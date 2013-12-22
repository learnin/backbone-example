/*global require*/
'use strict';

require.config({
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: [
        'underscore',
        'jquery'
      ],
      exports: 'Backbone'
    },
    handlebars: {
      exports: 'Handlebars'
    },
    client: {
      deps: [
        'jquery'
      ],
      exports: 'Client'
    }
  },
  paths: {
    jquery: '../bower_components/jquery/jquery',
    backbone: '../bower_components/backbone/backbone',
    underscore: '../bower_components/underscore/underscore',
    handlebars: '../bower_components/handlebars/handlebars',
    client: 'vendor/client'
  }
});

require([
  'underscore',
  'backbone',
  'jquery',
  'client',
  'routes/router',
  'views/appView'
], function (_, Backbone, $, Client, Router, AppView) {

  var sync = Backbone.sync;
  Backbone.sync = function(method, model, options) {
    options = options ? _.clone(options) : {};
    if (options.multipart) {
      // TODO multipart request
    }
    return sync(method, model, options);
  };

  var router = new Router();

  var appView = new AppView({
    router: router
  });

  $(function() {
    $('#app').append(appView.render().el);
    Backbone.history.start();
  });
});
