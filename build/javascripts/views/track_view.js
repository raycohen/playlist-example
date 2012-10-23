Jukebox.TrackView = function(track, playlist) {
  console.log('TrackView', arguments);
  this.track = track;
  this.playlist = playlist;
};

Jukebox.TrackView.prototype = {
  getElement: function() {
    this.element = this.element || this.buildElement();
    return this.element;
  },
  removeClick: function() {
    this.playlist.removeTrack(this.track);
  },
  buildElement: function() {
    var li = document.createElement('li');
    li.innerHTML = this.template;

    li.querySelector('.track-name').innerText = this.track.name;
    li.querySelector('.track-album').innerText = this.track.album;
    li.querySelector('.track-artist').innerText = this.track.artist;

    this.onRemoveClick = this.removeClick.bind(this);
    li.querySelector('.remove').addEventListener('click', this.onRemoveClick);

    // attribute data-spotifyId will be the unique Id for the track
    li.dataset['spotifyId'] = this.track.id;

    return li;
  },
  teardown: function() {
    var li = this.element;
    li.querySelector('.remove').removeEventListener('click', this.onRemoveClick);
  },
  template: document.getElementById('track-template').innerHTML
};
