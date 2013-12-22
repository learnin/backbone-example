/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'templates'
], function ($, _, Backbone, JST) {
  'use strict';

  return Backbone.View.extend({
    tagName: 'p',
    template: JST['app/scripts/templates/prefectureItem.hbs'],
    initialize: function() {
      this.listenTo(this.model, 'change', this.render);
      // this.listenTo(this.model, 'remove', this.remove);
    },
    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
  });
});
