const jwt = require('jsonwebtoken');

const verificarAutenticacion = (req, res, next) => {
  const token = req.header('x-token');

  if (!token) {
    return res.status(401).json({ message: 'Acceso no autorizado' });
  }

  try {
    const usuarioAutenticado = jwt.verify(token, process.env.CLAVE);
    console.log('Usuario autenticado:', usuarioAutenticado);  // Agrega esta línea para depuración
    req.usuarioAutenticado = usuarioAutenticado;
    next();
  } catch (error) {
    console.error('Error en la verificación del token:', error);
    return res.status(401).json({ message: 'Token no válido' });
  }
};


module.exports = verificarAutenticacion;
