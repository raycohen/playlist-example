Jukebox.Track = function(trackData) {
  this.data = trackData;

  this.name = this.data.name;
  this.artist = this.data.artists[0].name;
  this.album = this.data.album.name;
};

Jukebox.Track.prototype = {

}

