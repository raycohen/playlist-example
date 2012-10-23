Jukebox.ResultTrackView = function(track) {
  this.track = track;
};

Jukebox.ResultTrackView.prototype = {
  getElement: function() {
    this.element = this.element || this.buildElement();
    return this.element;
  },
  addClick: function() {
    Jukebox.playlistController.addTrackToSelectedPlaylist(this.track);
  },
  buildElement: function() {
    var li = document.createElement('li');
    li.innerHTML = this.template;

    li.querySelector('.track-name').innerText = this.track.name;
    li.querySelector('.track-album').innerText = this.track.album;
    li.querySelector('.track-artist').innerText = this.track.artist;

    this.onAddClick = this.addClick.bind(this);
    li.querySelector('.add-to-selected-playlist').addEventListener('click', this.onAddClick);

    // attribute data-spotifyId will be the unique Id for the track
    li.dataset['spotifyId'] = this.track.id;

    return li;
  },
  teardown: function() {
    var li = this.element;
    li.querySelector('.add-to-selected-playlist').removeEventListener('click', this.onAddClick);
  },
  template: document.getElementById('result-template').innerHTML
};
