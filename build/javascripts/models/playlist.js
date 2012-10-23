Jukebox.Playlist = function(name) {
  this.name = name;
  this.id = "playlist" + Jukebox.Playlist.prototype.nextId++;
  this.tracks = [];
};

Jukebox.Playlist.prototype = {
  nextId: 0,

  addTrack: function(track) {
    this.tracks.push(track);
  },

  removeTrack: function(track) {
    this.tracks.splice(this.tracks.indexOf(track), 1);
    this.rerenderViews();
  },

  rerenderViews: function() {
    if (this.playlistView) {
      this.playlistView.rerender();
    }
  }
}

