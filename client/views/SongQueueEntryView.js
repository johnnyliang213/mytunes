// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',
  template: _.template('<td><%= artist %></td><td><%= title %></td><td><button class="remove-from-q btn btn-warning pull-right">remove</button></td>'),

  events: {
    'click .remove-from-q': function(){
      this.model.dequeue()
      console.log('dequing!')
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
