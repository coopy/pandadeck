var Hapi = require('hapi');
var moonboots = require('moonboots_hapi');
var stylizer = require('stylizer');
var templatizer = require('templatizer');

var server = Hapi.createServer(8888, 'localhost');

server.pack.register({
  plugin: moonboots,
  options: {
    appPath: '/{p*}',
    moonboots: {
      main: __dirname + '/client/app.js',
      developmentMode: true,
      sourceMaps: true,
      beforeBuildJS: function () {
        templatizer(
          __dirname + '/templates',
          __dirname + '/client/templates.js');
      },
      beforeBuildCSS: function (done) {
        stylizer({
          infile: __dirname + '/styles/main.styl',
          outfile: __dirname + '/assets/main.css',
          development: true,
          watch: __dirname + '/styles/**/*.styl'
        }, done);
      },
      stylesheets: [
        __dirname + '/assets/bootstrap.min.css',
        __dirname + '/assets/main.css'
      ]
    }
  }
}, function (err) {
  if (err) {
    console.log('Error loading moonboots:');
    console.log(err);
    process.exit(1);
  }
  console.log('running server at http://localhost:8888');
  server.start();
});