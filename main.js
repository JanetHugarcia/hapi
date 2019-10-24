const Hapi = require('@hapi/hapi');

const krowdy = Hapi.server({
    port: 4000,
    host: 'localhost'
})



console.log('Server running on %s', krowdy.info.uri);

const users = {
    123: {
        email: 'guest@guest.com',
        scope: ['user']
     },
    124: {
       email: 'admin@admin.com',
       scope: ['user', 'admin']
     }
}

const products = [
    {
        id: 1,
        name: 'manzana'
    },
    {
       id: 2,
       name: 'platano'
     }
]

krowdy.route({
    method: 'GET',
    path: '/users',
    handler: (req, h) => {
        return users;
    }
});

krowdy.route({
    method: 'GET',
    path: '/users/{id}',
    handler: (req, h) => {
        return users[req.params.id];
    }
});

krowdy.route({
    method: 'GET',
    path: '/users/{id}/products',
    handler: (req, h) => {
        return products;
    }
});

krowdy.route({
    method: 'POST',
    path: '/users/{id}/products',
    handler: (req, h) => {
        if (users[req.params.id] && users[req.params.id].scope.length>1) {
            let item = req.payload;
            item.id = products.length + 1;
            products.push(
                item
            )
            return products;
        }
        return 'no permitido'
    }
});

krowdy.start()