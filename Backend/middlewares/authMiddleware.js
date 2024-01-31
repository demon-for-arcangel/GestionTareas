const jwt = require('jsonwebtoken');
const verificarAutenticacion = (req, res, next) => {
  const token = req.headers['x-token'];

  if (!token) {
    return res.status(401).json({ message: 'Token no proporcionado' });
  }

  try {
    const decoded = jwt.verify(token, process.env.CLAVE);
    req.usuarioAutenticado = decoded;  // Asigna el objeto decodificado a req.usuarioAutenticado
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: 'Token inválido' });
  }
};

module.exports = verificarAutenticacion;
