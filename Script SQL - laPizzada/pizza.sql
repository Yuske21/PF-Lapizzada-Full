-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-07-2024 a las 09:40:47
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
-- Base de datos: `lapizzada`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pizza`
--

CREATE TABLE `pizza` (
  `id_pizza` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `ingrediente` varchar(255) DEFAULT NULL,
  `precio` float DEFAULT NULL,
  `calificacion` int(11) DEFAULT NULL,
  `estrella` tinyint(4) DEFAULT NULL,
  `chef` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pizza`
--

INSERT INTO `pizza` (`id_pizza`, `nombre`, `descripcion`, `ingrediente`, `precio`, `calificacion`, `estrella`, `chef`) VALUES
(1, 'Pizza V5', 'Rica pizza con variedad de vegetales frescos.', 'Tom, Pim, Ceb, Aceitunas, Champiñones, Queso Mozzarella.', 3200, 10, 1, 'Arturo Man'),
(2, 'Pizza Especial de Cebolla', 'Pizza con cebolla caramelizada y queso.', 'Cebolla Caramelizada, Queso Mozzarella, Orégano, Aceite de Oliva.', 3100, 80, 3, 'Luisana Nantes'),
(3, 'Pizza Inferno', 'Pizza picante con jalapeños y salsa especial.', 'Jalapeños, Salsa Picante, Pepperoni, Queso Mozzarella.', 3500, 90, 4, 'Alejandro Lee'),
(4, 'Pizza Fugazzeta de Pepperoni', 'Pizza rellena de queso y pepperoni.', 'Queso Mozzarella, Pepperoni, Cebolla, Orégano.', 3200, 90, 4, 'Andrea Berenice'),
(5, 'Pizza Moderna', 'Pizza gourmet con ingredientes de alta calidad.', 'Queso de Cabra, Rúcula, Tomate Seco, Aceitunas, Pesto.', 2700, 70, 3, 'Thalia Vorget'),
(6, 'Pizza Alemana', 'Pizza con salchichas alemanas y queso.', 'Salchichas Alemanas, Queso Cheddar, Mostaza, Cebolla, Perejil.', 3000, 50, 2, 'Soledad Ponds'),
(7, 'Pizza Fugazzeta de Jamon', 'Pizza rellena de queso y jamón.', 'Queso Mozzarella, Jamón, Cebolla, Orégano.', 3300, 80, 4, 'Jennifer Thompson'),
(14, 'Pizza Classica', 'La pizza tradicional de queso con salsa.', 'Queso, aceitunas verdes, morron, sardinas y orégano.', 2000, 700, 3, 'Juan Perez');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `pizza`
--
ALTER TABLE `pizza`
  ADD PRIMARY KEY (`id_pizza`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `pizza`
--
ALTER TABLE `pizza`
  MODIFY `id_pizza` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
