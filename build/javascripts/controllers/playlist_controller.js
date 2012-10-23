Jukebox.playlistController = {
  playlists: [],
  playlistViews: [],
  createPlaylist: function(name) {
    name = name.trim();
    if (!name) {return false;}

    var view, playlist = new Jukebox.Playlist(name);
    this.playlists.push(playlist);

    view = new Jukebox.PlaylistView(playlist);
    var playlistsList = document.getElementById("playlists");
    playlistsList.appendChild(view.getElement());
    this.playlistViews.push(view);
    if (this.playlistViews.length === 1) {
      this.playlistViews[0].markSelected();
    }
  },
  addTrackToSelectedPlaylist: function(track) {
    var playlistsList = document.getElementById("playlists"),
      li = playlistsList.querySelector('.playlist.selected'),
      view;
    if (li) {
      view = this.playlistViews.filter(function(view) {
        return view.element === li;
      })[0];
      view.playlist.addTrack(track);
      view.rerender();
    } else {
      alert('Please click select on a playlist before adding tracks');
    }
  },
  destroyPlaylist: function(playlist) {
    var list = this.playlists, idx = list.indexOf(playlist);
    if (idx != -1) {
      list.splice(idx, 1);
    }
  }
};
