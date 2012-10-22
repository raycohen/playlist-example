Jukebox.searchResultsView = {
  trackViews: [],
  displayTracks: function(tracks) {
    this.empty();

    tracks.forEach(function(track) {
      var trackView = new Jukebox.ResultTrackView(track);
      this.trackViews.push(trackView);
      this.element.appendChild(trackView.getElement());
    }, this);
  },
  empty: function() {
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
