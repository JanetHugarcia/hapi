const Hapi = require('@hapi/hapi');
var routes = require('./main/routes/rutas');

const krowdy = Hapi.server({
    port: 4000,
    host: 'localhost'
})

krowdy.start()

console.log('Server running on %s', krowdy.info.uri);

krowdy.route(routes);