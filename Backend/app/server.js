const express = require('express');
const cors = require('cors');
class Server {
    constructor() {
        this.app = express();
        this.apiPath = '/api';
        this.middlewares();
        this.routes();
        
    }
    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    }
    routes(){
        this.app.use(this.apiPath , require('../routes/RolesRoutes'));
        this.app.use(this.apiPath , require('../routes/TareasRoutes'));
        this.app.use(this.apiPath , require('../routes/UsuarioRoutes'));
        this.app.use(this.apiPath, require('../routes/AuthRoutes'));
    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log(`Servidor escuchando en: ${process.env.PORT}`);
        })
    }
}

module.exports = Server;