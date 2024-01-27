const bcrypt = require('bcrypt');
const { fakerES } = require('@faker-js/faker');

const genUsers = async (ctos = 1) => {

    let usersGen = []
    for(let i = 1; i <= ctos; i++) {
        const password = await bcrypt.hash('1234', 10);
        let u = 
            {
            nombre: fakerES.person.firstName(),
            contrasena: password,
            id_rol: Math.ceil(Math.random() * 2),
            createdAt: new Date(),
            updatedAt: new Date()
            }
            usersGen.push(u)
    }
    return Promise.all(usersGen);
}

module.exports = {
    genUsers
}