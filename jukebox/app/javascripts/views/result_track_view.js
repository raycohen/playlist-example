Jukebox.ResultTrackView = function(track) {
  this.track = track;
};

Jukebox.ResultTrackView.prototype = {
  getElement: function() {
    this.element = this.element || this.buildElement();
    return this.element;
  },
  buildElement: function() {
    var li = document.createElement('li');
    li.innerHTML = this.template;

    li.querySelector('.track-name').innerText = this.track.name;
    li.querySelector('.track-album').innerText = this.track.album;
    li.querySelector('.track-artist').innerText = this.track.artist;

    return li;
  },
  teardown: function() {
    /* remove event listeners */
  }
};

Jukebox.ResultTrackView.prototype.template = document.getElementById('track-template').innerHTML;


