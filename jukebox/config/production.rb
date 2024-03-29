Jukebox.configure do
  # Minify JS and CSS
  config.pipeline.minify = true

  # Generate GZip version of files along with regular version
  config.pipeline.gzip = true

  # Generate an HTML5 Cache Manifest for offline support
  config.pipeline.manifest = true

  # Precompile handlebars templates
  config.handlebars.precompile = false

  # Module format for minispade: :string or :function
  config.minispade.module_format = :string
end
