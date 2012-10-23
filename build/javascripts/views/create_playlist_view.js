Jukebox.createPlaylistView = {
  setup: function() {
    this.element = document.getElementById("create-playlist");

    this.element.addEventListener('click', function() {
      var input = document.getElementById("create-playlist-name"),
        value = input.value.trim();

      input.value = '';
      Jukebox.playlistController.createPlaylist(value);
    })
  }
};

Jukebox.createPlaylistView.setup();
