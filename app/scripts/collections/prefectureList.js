/*global define*/

define([
  'underscore',
  'backbone',
  'client',
  'models/prefecture'
], function (_, Backbone, Client, Prefecture) {
  'use strict';

  return Backbone.Collection.extend({
    name: 'PrefectureList',
    model: Prefecture,
    parse: function(resp) {
      var array = [];
      _.each(resp.response.prefecture, function(name) {
        array.push({
          name: name
        });
      });
      return array;
    },
    // リクエスト処理をハンドリングするには、fetchやsaveをオーバーライドする。実際のリクエスト送信はそこから呼ばれる
    // syncメソッドで行われ、中身はそのままBackbone.syncへ委譲される。
    // 共通的な処理(multipartリクエスト対応等)はapp.js等でBackbone.syncをオーバーライドして実装し、
    // ModelやCollection個別の処理はModelやCollectionのsyncメソッドをオーバーライドする。
    sync: function(method, model, options) {
      options = options ? _.clone(options) : {};
      var xhr = options.xhr = Client.getPrefectures().done(options.success).fail(options.error);
      model.trigger('request', model, xhr, options);
      return xhr;
    }
  });
});
