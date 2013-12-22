(function(){
  'use strict';

  var root = this,
      $ = root.$;

  var Client;
  if (typeof exports !== 'undefined') {
    Client = exports;
  } else {
    Client = root.Client = {};
  }

  Client.getPrefectures = function() {
    var d = $.Deferred();
    $.ajax({
      url: 'http://www.corsproxy.com/express.heartrails.com/api/json?method=getPrefectures',
      type:'GET',
      dataType: 'json'
    }).done(function(data) {
      d.resolve(data);
    }).fail(function() {
      d.reject();
    });
    return d;
  };

}).call(this);
