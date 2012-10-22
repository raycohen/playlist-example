Jukebox.Ajax = function(url, type, options) {
  this.url = url;
  this.type = type;
  this.options = options;
};

Jukebox.Ajax.prototype = {
  send: function() {
    var xhr = this.xhr = new XMLHttpRequest();
    xhr.onreadystatechange = this.onreadystatechange.bind(this);
    xhr.open(this.type, this.url);
    xhr.send();
  },

  ok: function() {
    return this.status >= 200 && this.status < 300;
  },

  onreadystatechange: function() {
    var xhr = this.xhr;
    if (xhr.readyState === 4) {
      // xhr.getResponseHeader

      this.status = xhr.status;
      if (this.ok()) {
        this.responseText = xhr.responseText;
        this.data = JSON.parse(this.responseText);
        if (this.options.success) {
          this.options.success.call(this.options.target || this, this.data);
        }
      }
    }
  }
}




