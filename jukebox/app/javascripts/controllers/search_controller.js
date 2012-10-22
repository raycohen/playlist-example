Jukebox.searchController = {
  query: '', /* current search term */
  updateQuery: function(query) {
    this.query = query;
    if (this.hasRequested(query)) {
      console.log('hasRequested', query);
      if (this.hasResultsFor(query)) {
        console.log('hasResultsFor', query);
        return this.displayResults(query);
      } else {
        console.log('NOT hasResultsFor', query);
        /* no results to show or Ajax is not finished */
      }
    } else {
      console.log('NOT hasRequested', query);
      this.request(query);
    }
  },
  requests: {},
  results: {},
  resultData: {},
  hasRequested: function(query) {
    return !!this.requests[query];
  },
  hasResultsFor: function(query) {
    return !!this.results[query];
  },
  handleRequestData: function(query, data) {
    console.log("handleRequestData", arguments);
    this.results[query] = data;
    if (this.query == query) {
      this.displayResults(query);
    }
  },
  displayResults: function(query) {
    var tracks = [], data = this.results[query];
    console.log('displayResults', data);
    if (data && data.tracks) {

      data.tracks.forEach(function(trackData) {
        var track = new Jukebox.Track(trackData);
        tracks.push(track);
      });
    }
    Jukebox.searchResultsView.displayTracks(tracks);
  },
  request: function(query) {
    var url = "http://ws.spotify.com/search/1/track.json?q=" + encodeURIComponent(query);
    var ajax = new Jukebox.Ajax(url, "GET", {
      query: query,
      target: this,
      success: function(data) {
        this.handleRequestData(query, data);
      }
    });
    ajax.send();
    this.requests[query] = ajax;
  }
}
