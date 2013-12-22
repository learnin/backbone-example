/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'templates',
  'collections/prefectureList',
  'views/prefectureListView'
], function ($, _, Backbone, JST, PrefectureList, PrefectureListView) {
  'use strict';

  return Backbone.View.extend({
    mainView: null,
    initialize: function() {
      this.listenTo(this.options.router, 'route', this.dispatch);
    },
    render: function() {
      var prefectureList = new PrefectureList();
      var prefectureListView = new PrefectureListView({
        collection: prefectureList
      });
      prefectureList.fetch();
      $('#prefectureList').append(prefectureListView.render().el);
      return this;
    },
    dispatch: function(name, args) {
      // TODO 各画面遷移メソッドを実装し、nameにもとづいて、それぞれのメソッドをコールする。
      if (this.mainView) {
        this.mainView.remove();
      }
    }
  });
});
