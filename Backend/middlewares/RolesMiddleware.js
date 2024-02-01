const RolMiddleware = (rolEsperado) => {
  return (req, res, next) => {
    console.log('Middleware de Roles activado');

    try {
      const { id_rol } = req.usuarioAutenticado;
      console.log('Rol esperado:', rolEsperado);
      console.log('Rol real:', id_rol);

      if (id_rol !== rolEsperado) {
        return res.status(403).json({ message: 'Acceso no autorizado' });
      }

      next();
    } catch (error) {
      console.error('Error en el middleware de Roles:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  };
};

module.exports = RolMiddleware;
