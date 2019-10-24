const Hapi = require('@hapi/hapi');

const krowdy = Hapi.server({
    port: 4000,
    host: 'localhost'
})

krowdy.start()

console.log('Server running on %s', krowdy.info.uri);

server.route({
    method: 'GET',
    path: '/',
    handler: (req, res, next) => {

        return 'Hello World!';
    }
});