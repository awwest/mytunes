// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
    // console.log(this.attributes);
  },

  initialize : function(){
    this.set('queueStatus', false);
  },

  enqueue: function(){
    // this.trigger('enqueue', this);
    this.set('queueStatus', true);
  },

  dequeue: function(){

    this.set('queueStatus', false);
  },
  // ended: function(){
  //    this.trigger('ended', this);
  // }

});

/*
var aninstanceofsongmodel = new SongModel({
    url: "https://s3-us-west-1.amazonaws.com/hr-mytunes/data/04+One+In+A+Million.mp3",
    title: "One In A Million",
    artist: "Aaliyah",
  });
  */
