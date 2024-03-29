require 'iridium'

if defined?(Bundler) 
  Bundler.require :default, Iridium.env
end

class Jukebox < Iridium::Application
  # Specify vendor load order. Files will be concatenated in the
  # declared order. Undeclared files will be concatentated after
  # all declared files
  config.dependencies.load :minispade

  # Specify a different place to load your templates. All templates
  # will be added to Javascript array specified here:
  # 
  # Example:
  #   config.handlebars.target = "TEMPLATES"
  #
  #   // now in Javascript
  #   window.TEMPLATES['foo'] // templated named foo
  #
  # config.handlebars.target = "Jukebox.TEMPLATES"

  # Specify a different handlebars compiler to use. This is not the
  # the same as the precompiler! This proc returns a Javascript snippet
  # used to compile the raw template. It's written directly into the
  # final application.js
  # 
  # Example for Ember:
  #
  # config.handlebars.compiler = proc { |source| "Ember.Handlebars.compile(#{source});" }

  # Enable a proxy to an API. You can use this to get around CORS
  # or use it for authentication hidding.
  #
  # config.proxy '/api', 'http://my.api.com'

  # You can customize the middleware chain. It follows the Rack::Builder
  # api.
  #
  # config.middleware.use MyCustomMiddleware

  # You can add a middleware that adds a cookie to all request. This
  # is especially useful when the cookie is set by an external service
  #
  # config.add_cookie 'user-api-token', 'foo-bar'
end
