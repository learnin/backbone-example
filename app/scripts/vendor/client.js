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
    return $.ajax({
      url: 'http://www.corsproxy.com/express.heartrails.com/api/json?method=getPrefectures',
      type:'GET',
      dataType: 'json'
    }).then(function(data, textStatus, jqXHR) {
      // return data;
      return jqXHR.done(data, textStatus, jqXHR);
    }, function(jqXHR, textStatus, errorThrown) {
      // return jqXHR;
      return jqXHR.fail(jqXHR, textStatus, errorThrown);
    });
  };

}).call(this);
