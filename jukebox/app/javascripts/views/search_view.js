Jukebox.searchView = {
  attachEventListeners: function() {
    this.element.addEventListener('keyup', this.onKeyUp);
  },

  onKeyUp: function() {
    var value = this.element.value.trim();
    console.log("onKeyUp #search value is", value);
    if (value) {
      Jukebox.searchController.updateQuery(value);
    }
  },

  setup: function() {
    this.element = document.getElementById("search");
    this.onKeyUp = this.onKeyUp.bind(this);
    this.attachEventListeners();
  }
};

Jukebox.searchView.setup();
