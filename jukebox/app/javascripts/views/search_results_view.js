Jukebox.searchResultsView = {
  trackViews: [],
  displayTracks: function(tracks) {
    this.cleanup();

    tracks.forEach(function(track) {
      var trackView = new Jukebox.ResultTrackView(track);
      this.trackViews.push(trackView);
      this.element.appendChild(trackView.getElement());
    }, this);
  },
  cleanup: function() {
    this.trackViews.forEach(function(trackView) {
      trackView.teardown();
    });

    this.trackViews = [];

    this.element.innerHTML = '';
  },
  setup: function() {
    this.element = document.getElementById("results");
  }
}

Jukebox.searchResultsView.setup();
