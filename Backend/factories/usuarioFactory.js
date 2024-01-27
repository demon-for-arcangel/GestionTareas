const bcrypt = require('bcrypt');
const faker = require('faker');

const usuarioFactory = async (ctos = 1) => {
    let factory = [];

    for (let i = 1; i <= ctos; i++) {
        const password = await bcrypt.hash(faker.internet.password(), 10);
        const user = {
            nombre_usuario: faker.name.firstName(),
            email: faker.internet.email(),
            contrasena: password,
        };
        factory.push(user);
    }

    return Promise.all(factory);
};

module.exports = {
    usuarioFactory
};
