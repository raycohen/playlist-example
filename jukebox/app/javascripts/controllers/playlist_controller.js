Jukebox.playlistController = {
  playlists: [],
  createPlaylist: function(name) {
    name = name.trim();
    if (!name) {return false;}

    var view, playlist = new Jukebox.Playlist(name);
    this.playlists.push(playlist);

    view = new Jukebox.PlaylistView(playlist);
    var playlistsList = document.getElementById("playlists");
    playlistsList.appendChild(view.getElement());
  },
  destroyPlaylist: function(playlist) {
    var list = this.playlists, idx = list.indexOf(playlist);
    if (idx != -1) {
      list.splice(idx, 1);
    }
  }
};
