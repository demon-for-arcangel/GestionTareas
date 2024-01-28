-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-01-2024 a las 16:01:35
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `gestiontareas_dev`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asignaciones`
--

CREATE TABLE `asignaciones` (
  `id_asignaciones` int(11) NOT NULL,
  `id_administrador` int(11) DEFAULT NULL,
  `id_programador` int(11) DEFAULT NULL,
  `id_tarea` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `historialtareas`
--

CREATE TABLE `historialtareas` (
  `id_historial` int(11) NOT NULL,
  `id_programador` int(11) DEFAULT NULL,
  `id_tarea` int(11) DEFAULT NULL,
  `fecha_finalizacion` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyectos`
--

CREATE TABLE `proyectos` (
  `id_proyecto` int(11) NOT NULL,
  `nombre_proyecto` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id_rol` int(11) NOT NULL,
  `nombre_rol` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id_rol`, `nombre_rol`) VALUES
(1, 'Administrador'),
(2, 'Programador'),
(3, 'Administrador'),
(4, 'Programador'),
(5, 'Administrador'),
(6, 'Programador'),
(7, 'Administrador'),
(8, 'Programador'),
(9, 'Administrador'),
(10, 'Programador'),
(11, 'Administrador'),
(12, 'Programador'),
(13, 'Administrador'),
(14, 'Programador'),
(15, 'Administrador'),
(16, 'Programador'),
(17, 'Administrador'),
(18, 'Programador'),
(19, 'Administrador'),
(20, 'Programador'),
(21, 'Administrador'),
(22, 'Programador'),
(23, 'Administrador'),
(24, 'Programador'),
(25, 'Administrador'),
(26, 'Programador'),
(27, 'Administrador'),
(28, 'Programador'),
(29, 'Administrador'),
(30, 'Programador'),
(31, 'Administrador'),
(32, 'Programador'),
(33, 'Administrador'),
(34, 'Programador');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('01_20240120170526-create-rol.js'),
('02_20240120170453-create-user.js'),
('03_20240120170658-create-tareas.js'),
('04_20240120170634-create-asignacion.js'),
('04_20240126143921-create-historial-tareas.js'),
('05_20240126144001-create-proyecto.js'),
('06_20240126144009-create-tarea-proyecto.js'),
('07_20240120170634-create-asignacion.js'),
('20240126143921-create-historial-tareas.js'),
('20240126144001-create-proyecto.js'),
('20240126144009-create-tarea-proyecto.js');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tareas`
--

CREATE TABLE `tareas` (
  `id_tarea` int(11) NOT NULL,
  `descripcion` text NOT NULL,
  `dificultad` enum('XS','S','M','L','XL') NOT NULL,
  `horas_previstas` int(11) NOT NULL,
  `horas_realizadas` int(11) DEFAULT NULL,
  `porcentaje_realizacion` int(11) DEFAULT NULL,
  `completada` tinyint(1) DEFAULT NULL,
  `id_programador` int(11) DEFAULT NULL,
  `asignada_por` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tareas`
--

INSERT INTO `tareas` (`id_tarea`, `descripcion`, `dificultad`, `horas_previstas`, `horas_realizadas`, `porcentaje_realizacion`, `completada`, `id_programador`, `asignada_por`) VALUES
(1, '', 'XS', 0, NULL, NULL, NULL, NULL, NULL),
(2, '', 'XS', 0, NULL, NULL, NULL, NULL, NULL),
(3, '', 'XS', 0, NULL, NULL, NULL, NULL, NULL),
(4, '', 'XS', 0, NULL, NULL, NULL, NULL, NULL),
(5, '', 'XS', 0, NULL, NULL, NULL, NULL, NULL),
(6, '', 'XS', 0, NULL, NULL, NULL, NULL, NULL),
(7, '', 'XS', 0, NULL, NULL, NULL, NULL, NULL),
(8, '', 'XS', 0, NULL, NULL, NULL, NULL, NULL),
(9, '', 'XS', 0, NULL, NULL, NULL, NULL, NULL),
(10, '', 'XS', 0, NULL, NULL, NULL, NULL, NULL),
(11, '', 'XS', 0, NULL, NULL, NULL, NULL, NULL),
(12, '', 'XS', 0, NULL, NULL, NULL, NULL, NULL),
(13, '', 'XS', 0, NULL, NULL, NULL, NULL, NULL),
(14, '', 'XS', 0, NULL, NULL, NULL, NULL, NULL),
(15, '', 'XS', 0, NULL, NULL, NULL, NULL, NULL),
(16, '', 'XS', 0, NULL, NULL, NULL, NULL, NULL),
(17, '', 'XS', 0, NULL, NULL, NULL, NULL, NULL),
(18, '', 'XS', 0, NULL, NULL, NULL, NULL, NULL),
(19, '', 'XS', 0, NULL, NULL, NULL, NULL, NULL),
(20, '', 'XS', 0, NULL, NULL, NULL, NULL, NULL),
(21, '', 'XS', 0, NULL, NULL, NULL, NULL, NULL),
(22, '', 'XS', 0, NULL, NULL, NULL, NULL, NULL),
(23, '', 'XS', 0, NULL, NULL, NULL, NULL, NULL),
(24, '', 'XS', 0, NULL, NULL, NULL, NULL, NULL),
(25, '', 'XS', 0, NULL, NULL, NULL, NULL, NULL),
(26, '', 'XS', 0, NULL, NULL, NULL, NULL, NULL),
(27, '', 'XS', 0, NULL, NULL, NULL, NULL, NULL),
(28, '', 'XS', 0, NULL, NULL, NULL, NULL, NULL),
(29, '', 'XS', 0, NULL, NULL, NULL, NULL, NULL),
(30, '', 'XS', 0, NULL, NULL, NULL, NULL, NULL),
(31, '', 'XS', 0, NULL, NULL, NULL, NULL, NULL),
(32, '', 'XS', 0, NULL, NULL, NULL, NULL, NULL),
(33, '', 'XS', 0, NULL, NULL, NULL, NULL, NULL),
(34, '', 'XS', 0, NULL, NULL, NULL, NULL, NULL),
(35, '', 'XS', 0, NULL, NULL, NULL, NULL, NULL),
(36, '', 'XS', 0, NULL, NULL, NULL, NULL, NULL),
(37, '', 'XS', 0, NULL, NULL, NULL, NULL, NULL),
(38, '', 'XS', 0, NULL, NULL, NULL, NULL, NULL),
(39, '', 'XS', 0, NULL, NULL, NULL, NULL, NULL),
(40, '', 'XS', 0, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tareasproyecto`
--

CREATE TABLE `tareasproyecto` (
  `id_tarea_proyecto` int(11) NOT NULL,
  `id_tarea` int(11) DEFAULT NULL,
  `id_proyecto` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `nombre_usuario` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contrasena` varchar(255) NOT NULL,
  `id_rol` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre_usuario`, `email`, `contrasena`, `id_rol`) VALUES
(1, 'Edgardo', 'Dorian.Towne@hotmail.com', '$2b$10$sWGrEp4HMLO7IfMvUqcWN.vDA04qJuojOYpyVGQC01V7d9BBLG9li', NULL),
(2, 'Tad', 'Elinor_Brakus90@yahoo.com', '$2b$10$Bbr5xUo8PTzBCsXsqV7saefyGw4Q/Ztq7ZGP6u6kaVjRqbdPC.3Da', NULL),
(3, 'Tara', 'Kris.Upton84@gmail.com', '$2b$10$M1mslnlcoFcuwGYglC/aE.HkmPWPOY2GnPGsVz2V1cWj6AUmXUCsW', NULL),
(4, 'Santa', 'Isadore79@yahoo.com', '$2b$10$JElpuKvOOWoO.n5nLwuOreVx3/s.UiW4SXnhqcDVRTqb3TSAPuMDK', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `asignaciones`
--
ALTER TABLE `asignaciones`
  ADD PRIMARY KEY (`id_asignaciones`),
  ADD KEY `id_administrador` (`id_administrador`),
  ADD KEY `id_programador` (`id_programador`),
  ADD KEY `id_tarea` (`id_tarea`);

--
-- Indices de la tabla `historialtareas`
--
ALTER TABLE `historialtareas`
  ADD PRIMARY KEY (`id_historial`),
  ADD KEY `id_programador` (`id_programador`),
  ADD KEY `id_tarea` (`id_tarea`);

--
-- Indices de la tabla `proyectos`
--
ALTER TABLE `proyectos`
  ADD PRIMARY KEY (`id_proyecto`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id_rol`);

--
-- Indices de la tabla `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `tareas`
--
ALTER TABLE `tareas`
  ADD PRIMARY KEY (`id_tarea`),
  ADD KEY `id_programador` (`id_programador`),
  ADD KEY `asignada_por` (`asignada_por`);

--
-- Indices de la tabla `tareasproyecto`
--
ALTER TABLE `tareasproyecto`
  ADD PRIMARY KEY (`id_tarea_proyecto`),
  ADD KEY `id_tarea` (`id_tarea`),
  ADD KEY `id_proyecto` (`id_proyecto`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `id_rol` (`id_rol`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `asignaciones`
--
ALTER TABLE `asignaciones`
  MODIFY `id_asignaciones` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14766;

--
-- AUTO_INCREMENT de la tabla `historialtareas`
--
ALTER TABLE `historialtareas`
  MODIFY `id_historial` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `proyectos`
--
ALTER TABLE `proyectos`
  MODIFY `id_proyecto` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id_rol` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT de la tabla `tareas`
--
ALTER TABLE `tareas`
  MODIFY `id_tarea` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT de la tabla `tareasproyecto`
--
ALTER TABLE `tareasproyecto`
  MODIFY `id_tarea_proyecto` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `asignaciones`
--
ALTER TABLE `asignaciones`
  ADD CONSTRAINT `asignaciones_ibfk_1` FOREIGN KEY (`id_administrador`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `asignaciones_ibfk_2` FOREIGN KEY (`id_programador`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `asignaciones_ibfk_3` FOREIGN KEY (`id_tarea`) REFERENCES `tareas` (`id_tarea`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `historialtareas`
--
ALTER TABLE `historialtareas`
  ADD CONSTRAINT `historialtareas_ibfk_1` FOREIGN KEY (`id_programador`) REFERENCES `usuarios` (`id_usuario`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `historialtareas_ibfk_2` FOREIGN KEY (`id_tarea`) REFERENCES `tareas` (`id_tarea`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `tareas`
--
ALTER TABLE `tareas`
  ADD CONSTRAINT `tareas_ibfk_1` FOREIGN KEY (`id_programador`) REFERENCES `usuarios` (`id_usuario`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `tareas_ibfk_2` FOREIGN KEY (`asignada_por`) REFERENCES `usuarios` (`id_usuario`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `tareasproyecto`
--
ALTER TABLE `tareasproyecto`
  ADD CONSTRAINT `tareasproyecto_ibfk_1` FOREIGN KEY (`id_tarea`) REFERENCES `tareas` (`id_tarea`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tareasproyecto_ibfk_2` FOREIGN KEY (`id_proyecto`) REFERENCES `proyectos` (`id_proyecto`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`id_rol`) REFERENCES `roles` (`id_rol`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
