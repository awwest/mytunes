// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    // when we do not specify a Jquery selector like 'click selector', this event listener is bound to $el, otherwise it is bound to the specified selector
    // 'ended': function() {
    //   console.log("Song over");
    //   this.model.dequeue();
    // },

    'click': function(){
      console.log(" Clicked. ");
      this.model.dequeue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
