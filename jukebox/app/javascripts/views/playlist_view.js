Jukebox.PlaylistView = function(playlist) {
  this.playlist = playlist;
  this.trackViews = [];
};

Jukebox.PlaylistView.prototype = {
  getElement: function() {
    this.element = this.element || this.buildElement();
    return this.element;
  },
  destroy: function() {
    this.teardownEventListeners();
    this.element.parentNode.removeChild(this.element);
    this.element = null;
    Jukebox.playlistController.destroyPlaylist(this.playlist);
  },
  selectClick: function() {
    var playlistElements = document.getElementsByClassName('playlist');
    [].forEach.call(playlistElements, function(element) {
      element.classList.remove('selected');
    });

    this.element.classList.add('selected');
  },
  renameClick: function() {
    var newName = window.prompt("Enter a new name for this playlist");
    newName = newName.trim();
    if (newName) {
      this.playlist.name = newName;
      this.rerender();
    }
  },
  rerender: function() {
    this.teardownEventListeners();
    var oldElement = this.element;
    this.element = this.buildElement();
    var parent = oldElement.parentNode;
    parent.insertBefore(this.element, oldElement);
    parent.removeChild(oldElement);
  },
  buildElement: function() {
    var li = document.createElement('li');
    li.classList.add('playlist');
    li.innerHTML = this.template;

    li.querySelector('.playlist-name').innerText = this.playlist.name;

    this.onDeleteClick = this.destroy.bind(this);
    li.querySelector('.delete-playlist').addEventListener('click', this.onDeleteClick);

    this.onRenameClick = this.renameClick.bind(this);
    li.querySelector('.rename-playlist').addEventListener('click', this.onRenameClick);

    this.onSelectClick = this.selectClick.bind(this);
    li.querySelector('.select-playlist').addEventListener('click', this.onSelectClick);

    return li;
  },
  teardownEventListeners: function() {
    this.element.querySelector('.delete-playlist').removeEventListener('click', this.onDeleteClick);
    this.element.querySelector('.rename-playlist').removeEventListener('click', this.onRenameClick);
    this.element.querySelector('.select-playlist').removeEventListener('click', this.onSelectClick);
  },
  template: document.getElementById('playlist-template').innerHTML
};


