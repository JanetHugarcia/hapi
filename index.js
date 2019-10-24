const Hapi = require('@hapi/hapi');
var routes = require('./main/routes/rutas');
let data = require('./main/bd/data');
console.log(data, 'data');


const krowdy = Hapi.server({
    port: 4000,
    host: 'localhost'
})

krowdy.start()

console.log('Server running on %s', krowdy.info.uri);

krowdy.route(routes);
