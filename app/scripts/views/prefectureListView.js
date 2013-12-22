/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'views/prefectureItemView'
], function ($, _, Backbone, PrefectureItemView) {
  'use strict';

  return Backbone.View.extend({
    tagName: 'p',
    initialize: function() {
      this.listenTo(this.collection, 'add', this.append);
    },
    // View methods
    // ------------
    render: function() {
      this.collection.each(function(model) {
        this.append(model);
      }, this);
      return this;
    },
    append: function(model) {
      var itemView = (new PrefectureItemView({model: model})).render();

      var index = this.collection.indexOf(model);
      if (index === 0) {
        this.$el.prepend(itemView.el);
      } else {
        itemView.$el.insertAfter(this.$el.children()[index - 1]);
      }
    }
  });
});
