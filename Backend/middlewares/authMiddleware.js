const jwt = require('jsonwebtoken');

const verificarAutenticacion = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Acceso no autorizado, token no proporcionado' });
  }

  try {
    const decoded = jwt.verify(token, 'claveSecreta');
    req.usuarioAutenticado = decoded;
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: 'Token no válido' });
  }
};

module.exports = verificarAutenticacion;
