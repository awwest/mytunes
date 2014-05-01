// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    // when we do not specify a Jquery selector like 'click selector', this event listener is bound to $el, otherwise it is bound to the specified selector
    // 'click': function() {
    //   this.model.enqueue();
    // }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
