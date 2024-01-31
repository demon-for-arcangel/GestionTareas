const RolMiddleware = (rolEsperado) => {
  return (req, res, next) => {
    const { id_rol } = req.usuarioAutenticado;  // Accede a req.usuarioAutenticado directamente

    if (id_rol !== rolEsperado) {
      return res.status(403).json({ message: 'Acceso no autorizado' });
    }

    next();
  };
};

module.exports = RolMiddleware;
