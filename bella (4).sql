-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-02-2022 a las 19:49:48
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bella`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `agregar_almacenes` (`nombre_almacenc` VARCHAR(255), `direccion_almacenc` VARCHAR(255), `tipo_almacenc` INT)  INSERT INTO `almacenes`( `nombre_almacen`, `direccion_almacen`, `tipo_almacen`, `status`) VALUES (nombre_almacenc,direccion_almacenc,tipo_almacenc,1)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `agregar_bancos` (`nombre_bancos` VARCHAR(255), `numero_bancos` VARCHAR(255), `dinero_bancos` DECIMAL, `id_monedas` INT)  INSERT INTO banco(nombre_banco, numero_banco, dinero_banco, id_moneda, borrado) VALUES (nombre_bancos,numero_bancos,dinero_bancos,id_monedas,1)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `agregar_usuario` (`users` VARCHAR(255), `passwords` VARCHAR(255), `rols` INT)  INSERT INTO usuarios (user, password, rol, estado, borrado) VALUES (users,passwords,rols,1,1)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `disponible_usuario` (IN `users` VARCHAR(255))  SELECT id FROM usuarios WHERE user=users$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `eliminar_almacenes` (`idc` INT)  UPDATE almacenes set status=0 where id=idc$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `eliminar_bancos` (`idbanco` INT(11))  UPDATE banco SET borrado=0 WHERE id = idbanco$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `eliminar_usuario` (`ids` INT)  UPDATE usuarios SET borrado=0 WHERE id = ids$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `paginacion_almacenes` (`buscar` VARCHAR(255))  SELECT id FROM almacenes WHERE status=1 AND nombre_almacen LIKE  CONCAT('%',buscar,'%')$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `paginacion_bancos` (IN `buscar` VARCHAR(255))  SELECT id FROM banco WHERE borrado=1 AND nombre_banco LIKE  CONCAT('%',buscar,'%')$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `paginacion_usuario` (`buscar` VARCHAR(255))  SELECT id FROM usuarios WHERE borrado=1 AND user LIKE CONCAT('%',buscar,'%')$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `ver_almacenes` (`empezar` INT, `buscar` VARCHAR(255), `cantidad` INT)  SELECT * From almacenes where status=1 AND nombre_almacen LIKE CONCAT('%',buscar,'%') AND direccion_almacen LIKE CONCAT('%',buscar,'%') ORDER BY nombre_almacen limit empezar , cantidad$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `ver_bancos` (`empezar` INT, `buscar` VARCHAR(255), `cantidad` INT)  SELECT b.id, b.nombre_banco, b.numero_banco, b.dinero_banco, m.icono_moneda FROM banco b INNER JOIN moneda m ON b.id_moneda=m.id_moneda WHERE b.borrado=1 AND b.nombre_banco LIKE CONCAT('%',buscar,'%') ORDER BY b.nombre_banco limit empezar , cantidad$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `ver_nombre_perfil` (`idp` INT)  SELECT user FROM usuarios WHERE id=idp$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `ver_usuario` (`empezar` INT, `buscar` VARCHAR(255), `terminar` INT)  SELECT * FROM usuarios WHERE borrado=1 AND user LIKE CONCAT('%',buscar,'%') ORDER BY user limit empezar , terminar$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `almacenes`
--

CREATE TABLE `almacenes` (
  `id` int(11) NOT NULL,
  `nombre_almacen` varchar(255) NOT NULL,
  `direccion_almacen` varchar(255) NOT NULL,
  `tipo_almacen` int(11) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `almacenes`
--

INSERT INTO `almacenes` (`id`, `nombre_almacen`, `direccion_almacen`, `tipo_almacen`, `status`) VALUES
(1, 'Garzonrssad', 'San cristobal septima avenidaaa', 0, 1),
(2, 'asdasdxxx', 'sads', 0, 0),
(3, 'trytry', 'sadstrytry', 0, 0),
(4, 'trytry', 'sadstrytry', 0, 0),
(5, 'trytry', 'sadstrytry', 0, 0),
(6, 'trytry', 'sadstrytry', 0, 0),
(7, 'sad', 'sadds', 0, 0),
(8, 'nelberth', 'sadds', 0, 1),
(9, 'fdsf', 'dsfdfsdf', 0, 0),
(10, 'sdfhksdjfhsdjkf', 'sdfsdfsdf', 0, 0),
(11, 'sdfhksdjfhsdjkf', 'ttttttttttttttttttf', 1, 0),
(12, 'epico', 'super epico', 1, 0),
(13, 'fa', 'dfa', 1, 0),
(14, 'asddsfasdasa', 'asddsfdasad', 1, 1),
(15, 'asdsssss', 'asdsssss', 1, 1),
(16, 'asdasadfg', 'asdassasddf', 0, 1),
(17, 'asdsdf', 'asdsdffd', 0, 1),
(18, 'asd', 'asd', 0, 0),
(19, 'fds', 'dsf', 0, 1),
(20, 'fds', 'dsf', 0, 1),
(21, 'osorio', 'sad', 0, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `banco`
--

CREATE TABLE `banco` (
  `id` int(11) NOT NULL,
  `nombre_banco` varchar(255) NOT NULL,
  `numero_banco` varchar(255) NOT NULL,
  `dinero_banco` decimal(65,2) NOT NULL,
  `id_moneda` int(11) NOT NULL,
  `borrado` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `banco`
--

INSERT INTO `banco` (`id`, `nombre_banco`, `numero_banco`, `dinero_banco`, `id_moneda`, `borrado`) VALUES
(1, 'Bancolombia', '2465746461341688954', '1000.00', 1, 1),
(2, 'Bicentenario', '4546543215554354564', '20000.00', 2, 1),
(3, 'Banco de venezuela', '546876536545674555', '654561.20', 2, 1),
(4, 'Banco Caribes', '654654654654321123', '4654.00', 1, 0),
(5, 'Banco Bladex', '3246354654654465', '1.00', 2, 1),
(6, 'Sofitasa', '11234867987698787', '10000.00', 2, 1),
(7, 'asdasd', 'asdasd', '1000.00', 1, 0),
(8, 'Banesco', '54698465432468798465', '10000.00', 2, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lista_productos`
--

CREATE TABLE `lista_productos` (
  `id` int(11) NOT NULL,
  `id_almacen` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `precio_producto` decimal(60,2) NOT NULL,
  `id_moneda` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `cantidad` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lote`
--

CREATE TABLE `lote` (
  `id` int(11) NOT NULL,
  `id_lista_producto` int(11) NOT NULL,
  `id_transaccion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `moneda`
--

CREATE TABLE `moneda` (
  `id_moneda` int(11) NOT NULL,
  `nombre_moneda` varchar(255) NOT NULL,
  `icono_moneda` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `moneda`
--

INSERT INTO `moneda` (`id_moneda`, `nombre_moneda`, `icono_moneda`) VALUES
(1, 'Colon costarricense', 'CRC'),
(2, 'Dolar estadounidense', '$');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `id_almacen` int(11) NOT NULL,
  `nombre_producto` varchar(255) NOT NULL,
  `id_categoria` varchar(255) NOT NULL,
  `descripcion_producto` varchar(255) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `transacciones`
--

CREATE TABLE `transacciones` (
  `id` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `entrada` int(11) NOT NULL,
  `salida` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  `tipo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `user` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `rol` int(11) NOT NULL,
  `estado` int(11) NOT NULL,
  `Borrado` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `user`, `password`, `rol`, `estado`, `Borrado`) VALUES
(1, 'Nelberthe', '$2y$10$DziJP.F6tsIwdCadUp0LB.OA2RSw/.ZmGxbVJgoG1srBOYgPgWK/C', 3, 1, 1),
(3, 'sadsd', '$2y$10$ImRx/8Bk7lLEUskDj1ThaOj5bysEdlPbq17GABp90B1zOU0goPUKK', 2, 1, 1),
(8, 'et', '$2y$10$CphXHT5o33bgU0tUN5azj.V50GnEt79FfbR5.0tUgY7/DpN.tP7Qa', 1, 1, 1),
(9, 'reerr', '$2y$10$2piGsXAWPweSPL/kxpxTduRze2Ltnd3sW/jeJ6jiAPgJ4DF2JYj8y', 1, 1, 1),
(10, 'Christian', '$2y$10$Q6Rq3k5YCUMFK5f/ZFe8G.ZSS9Bhrhkhv8I4lsEyHIUg04TV7h9FW', 2, 1, 0),
(12, 'Jose', '$2y$10$BV4N/9hJzW2ZDkHH3jcsTelh/FtaoN.ybQ3kfrrGzwbZ8CUJdW96K', 1, 1, 1),
(13, 'Leonardo', '$2y$10$fnJL6w67QBJAOHgO3CuAb.dfSlWcZUJ.W771/YVOVvThhFVvd8oUy', 2, 1, 1),
(16, 'josue', '$2y$10$e7HKVpV2xtSA4BorbDEyx.boXnR.BYG3NX81hVULsQkQqgd/aewvu', 3, 1, 1),
(17, 'christonss', '$2y$10$zNxI/hWZbcS.HlzB74ayfOaNDRPjUzgoE7X0DYxae3S.QBM2JBla.', 1, 1, 1),
(18, 'asdkjhgkljgjkg', '$2y$10$PxxAcGMcmP8UT8ehtvihCOGfVaPiAzwuODvXEpXvOjbmKM0qy2H42', 2, 1, 1),
(19, 'Zetasd', 'asdd', 3, 1, 0),
(20, 'sdgfdgdg', '$2y$10$vo4B3aItgKXKZkDFV1Fd.ufmGsSai0je9Qq7RGAI4pC9JfuzmD.2a', 3, 1, 1),
(21, 'sad', 'asd', 1, 1, 0),
(23, 'sdfsdf', '$2y$10$XzKk7hMRqLZ5mdvMwjGKUO/oeMbr6bu1SJJKbiBvZSw/1BN8MIRwe', 1, 1, 1),
(24, 'a', '$2y$10$B6U9s8PuoL6lugL4OIc7qO7dKImhgoKGGZIR4MXfRF/bBBKI3l1jq', 3, 1, 0),
(25, 'asdasd657', 'a', 1, 1, 0),
(26, 'as', 'as', 2, 1, 0),
(27, 'asadsdyufsdf', '$2y$10$SUIyuHVE6b8qxN48ddNDa.sbKFrPCabKCljI9UaIIyAtWY22WBwca', 3, 1, 0),
(28, 'ae', '$2y$10$4O.uqJtbJ06nRn6MV1Nfe.7uEuYoQD9/hJNN3WFM/pQ5Ka3REeYMC', 1, 1, 0),
(29, 'aaaasdsd', '$2y$10$HJjRKayrCTgbi90leXuiXeC2o1oFd2Jef1G0TClGONZ3mJg46722a', 3, 1, 0),
(30, 'aadf', '$2y$10$58LayJvsJKq5FZNJ3RD1nOu/h6UglqAD.vStiutX.TT0qPd6zUAju', 1, 1, 0),
(31, 'sadasddd', '$2y$10$Ca8qINO8GW87q7FCZnnTNOazRRr5giiz3Nfb6jTfCy3JtnE2ZNB0W', 2, 1, 1),
(32, 'fdf', '$2y$10$73ZncpUua82YRIEhMe06IeeNuwaRUv5713DCRlxAVgNTTG2H/DE/K', 3, 1, 1),
(33, 'sd', '$2y$10$N/LGiTp2qm0Es8SjE8ehV.2M0owo0f25Q2wdObqLtKVbPwN5WOllC', 1, 1, 1),
(34, 'lwieopqweip', '$2y$10$DGV.t0mBooGWJddP6G3Bx.c7G7k9ujOPJIOeQ5BXpd/QOpFcgdIxS', 2, 1, 1),
(35, 'qqqqqqqqqqqqqqq', 'qqqqq', 1, 1, 0),
(36, 'rttuyui', '$2y$10$ptlh76wsqUGGQX6N9R2oG.nmliGaas484luJgjll.gtOy9zm1HAgW', 2, 1, 1),
(37, 'sdf', '$2y$10$ZzXLVZ56wrbQD8L/2VokYOCrLRgSKXy8W6ve2vzoAzu80QX3imqr.', 2, 1, 1),
(38, 'asdsaaddfsdf', '$2y$10$7qMDjNEsC2uvJIkNKKb5eO.yOEhSLv0QS9VfMQzLpYmRUhR72mFwm', 1, 1, 1),
(39, 'sadassa', '$2y$10$MxkCYiNOMgIgg27RwNNsTOsDmtIBuW3vAbYQh62V6zSSowzDSleji', 2, 1, 1),
(42, 'asdsadsd', '$2y$10$uF.OaHnNXmsXWOxuItFcuuZ065mxBlNmNJZ7DRcDBHHju0QdqwSti', 1, 1, 1),
(43, 'jjjjjjjjjjjjjjjjjjjjjjj', '$2y$10$0UZx/w7pHu20BFp8leaZbO/KaW7vPlVbJ8EyxX6ktUH/8SpNlW.0S', 1, 1, 1),
(44, 'sadasd', 'dasd', 1, 1, 0),
(45, 'sdaa', '$2y$10$8geGovCfZsNnFcZuzYF1P.7Ka81qLGK5bVhioAwBjeIG1eostpMjq', 2, 1, 1),
(46, 'juan', '$2y$10$rvNtJD43AdCCLlK1kNu7u.juSycnyJgFnQ6wPzYIVnTGFOAIy4R1y', 2, 1, 1),
(47, 'saasd', '$2y$10$VYQu.rPnhl2SdqFYTSgT.uCNlBZamxHKR9n8.r1XKOhygItSUqFrC', 1, 1, 1),
(49, 'hola', '$2y$10$UL6DKZb3mZzKZXaQPZBLB.o0qEFjsvSbPvD3t4HodZ3/tUxdE4BgC', 2, 1, 1),
(51, 'Nelberth', '$2y$10$fcFBhI8/rbWREV6JI7z0B.VbZ5z0TwG9keGguLJGckA5IjD9rlxXa', 1, 1, 1),
(52, 'Nelbert', '$2y$10$z7FaW/I8MDsPaSsWbSM4cufxP0V2Dd0nj/wY3Mplk4WqrhqgC8gD2', 2, 1, 1),
(54, 'qwe', 'qwe', 2, 1, 0),
(55, 'sads', '$2y$10$OsnixIj6a4nrrPlIOtggZOwez2xLcrZcco2/SQIx/xmXYeEFpDHqi', 2, 1, 1),
(56, 'qweqwe', '$2y$10$fIHHjYkhpKlwW9GIRGHsHemuVTMGLzPwBM5iTNLWAVa7TnqtMzvUq', 2, 1, 1),
(57, 'qweqweqwe', '$2y$10$1yY9RXXj5NhdYfd/cpWYqOjyQ4ZfxEduprbOH8UbTbjnNjqecAU1K', 3, 1, 1),
(58, 'oqwuieoqwie', 'qweqwe', 1, 1, 0),
(59, 'ttt', '$2y$10$BM2y53aeBKa/hgJuWs3IpeTJgbrVocwXaxMUV4VXfNwXFlFcViYzO', 1, 1, 1),
(60, 'erwerwer', '$2y$10$7KfmXUkcfSwXDhWGSGht9.UB4qOa0ogGOPVWZslKMXcAVOWb6ya9K', 3, 1, 1),
(61, 'werwer', '$2y$10$BRdbi2uSKxPEdQKUubAIVOx0JX7OdIVnO5f9ZPU2YMT/CFJQ9ZuIu', 3, 1, 1),
(62, 'werewrerwer', '$2y$10$YhL.uxfzdhOBKleDrXAAnudp2ADqAZXl2iqZVP9HUlWcuAT2AZxQK', 1, 1, 1),
(63, '23wqeqwe', '$2y$10$DtMHXOA8DfN1hve1B9TQveb65bLaVXQQCdSBL9c.oCprScZ/OjHDK', 2, 1, 0),
(64, 'karla', '$2y$10$xFC0hfAt7P96UEd0e80y9.owNDAB6wKyjGOh1nTqWNOyXMWW6b0.W', 2, 1, 1),
(65, 'dasdasda', '$2y$10$H/xe5.CB/QsY.DDWkisMJeW/A2gihU.V5ReX4qC9auKpaDknhBpcO', 2, 1, 1),
(66, 'asdasdasdsa', '$2y$10$GfVhlpEgsIDDYcEnxPLvludTCHGAgOyUM.IpZTZxpCK5hC/ScMA.G', 2, 1, 1),
(67, 'Zet132..', '$2y$10$RuHKLfJkJS5ujy9NOlGskOwOlxvy7cPGrsYogX5s5ZgNCPUqHCpW.', 2, 1, 1),
(68, 'Nelberts', '$2y$10$//9kidUw2Yq/AOi8Cxn2N.Rp7yGLssjqW.OsQsu8dOtF3OjKFQvv.', 2, 1, 1),
(69, 'hols', '$2y$10$hQQLDwFa3Ow4GHlom3UKQeEH9VVKPyBLNn02vJKOKAi3ULHTsfbqO', 3, 1, 1),
(70, 'asdasdasdasdsad', '$2y$10$Nt4u8weQJf2VMi7etmm3kea.zd3QkpEYWBAsOz1K9LDNCM6QdYVg6', 1, 1, 1),
(71, 'dsfdfdfdf', '$2y$10$dvP..LtqVKsIkiABTWG59Os.rn.SB5gMY.vjpjhKDXM1fmolmVlue', 3, 1, 1),
(72, 'nel', '$2y$10$uSyzfhfQkQ3NcZ.9jVN43uvza6NIlSjsrGWMi74eWg4r.vxgxN56e', 1, 1, 1),
(73, 'sdasd', '$2y$10$rKDL6txJV422OgsNd9fAruMtnrWPqklgXBE9NbqHxSrc1SNMyfrxy', 1, 1, 1),
(74, 'asdasdasdasdasddsf', '$2y$10$NVpFhm2vvzbCJ0wzolWgJ.3FhT0suqOVbkEvw.mr/1RWHUmBCk5Aq', 2, 1, 1),
(75, 'Nelberthiwue', '$2y$10$FcKlyi1NSs/eM.pQsLq/V.wtkJ5SpEtJjEmzBq0ymg0PhMXAK95Ae', 2, 1, 1),
(76, 'Nelb', '$2y$10$kgtNYKq3HC4rO5VD6wCYR.SNWTTXbZzF.T3y2qTFmMPaltPA1zTgq', 1, 1, 1),
(77, 'n', '$2y$10$vrmR9Gv02BzAvT8EAfzje.DG30wb0k8O5vaZVopGEAQsnOUuao/Pa', 1, 1, 1),
(78, 'aa', '$2y$10$vv3JuXi9IwjpSMp4dKh3ZurrsVgRs8k63C4A/PUHNjlW0tu1bXS/e', 1, 1, 0),
(79, 'qwer', '$2y$10$hMCrwSvU5zspO/1KdEs1EuSCeRL7GXC.h3wrwU0Vi6jgdfkHmzi2.', 2, 1, 1),
(80, 'DASD', '$2y$10$N5LjIi2w97j/o3g/sbDGg.vcOBH6VqltOb88FK0UzT8Yh6olKrqWe', 1, 1, 1),
(81, 'asdsd', '$2y$10$yd.uJWz9xhR3Q67SFLjVlOVOmb7OYioC2oz9/o/4wWwwZhLd3iN8K', 1, 1, 1),
(82, 'sdsadsad', '$2y$10$ApYp85401h6JoHKg7roLXuTODnza2MEQcWYq4Xw0dUm6Jn2X68vXe', 3, 1, 1),
(83, 'sdfsdfsdf', '$2y$10$uITCBomw4.m4sVpNExpoo.k0TajC/8jtdAwYikG/y4s8vk6DmPWk.', 3, 1, 1),
(84, 'dfg', '$2y$10$MkaN.gn.Zg5p9qk6mN73M.iN6cm6bvsh6BNClRAq55U5edV.Kpt7y', 1, 1, 1),
(85, 'Zetos', '$2y$10$SD7wEbi7vm/BoereEldFcue9Fmjh.dRrrj91ZsIG/NADz1F.i3oZG', 1, 1, 1),
(86, 'lsdkaslkdlasd', 'sdfsdf', 1, 1, 0),
(87, 'sdqweqwe', '$2y$10$vD9E5Vmt6JSwIpYjksyfTu9.Y/87FeDL3f14unwTPNaMWTmEQw.Pq', 2, 1, 1),
(88, 'wdsf', '$2y$10$CfUMlOk7x.rfznnJeObUAO4xdh781Tp1N/3WLjBc4wRO/RrR60rli', 2, 1, 1),
(89, 'erw', '$2y$10$5BmGn4dWmUN.dwWSHRSw.uCixETUfaZPCEmCEipYmWYbKR6/lCE8q', 2, 1, 1),
(90, 'zet', '$2y$10$cpBF0XUYXW8ilJLkA9OiSeR1JSA43HS8hOmbK68rm8Nt6s7mN2J.q', 1, 1, 1),
(91, 'jja', '$2y$10$6gPjEUyIYhM17uugJveSh.2aaDQ58cH5/E63X6fFrqBozCqyrfDR2', 3, 1, 1),
(92, 'josewe', '$2y$10$WLsnYTEiPwy2NF2Tu2k4T.BMktMlE725XNfz4iOiQ9YX9ttNvAgHK', 2, 1, 1),
(93, 'y', '$2y$10$6dRXGJYkngz/ToqOJbjICe.1MGGFNHwllWVERTOEyhpT9kygjjQ6C', 3, 1, 0),
(94, 'Danny', '$2y$10$ojg6qXLZnZQjsAHMhWU7Tucjrq5ipQYZuI7bYjnpC3QOWLrervat6', 2, 1, 1),
(95, 'sdfdgdfg', '$2y$10$7YkOedN6WYpj0OrHBAE5v.QOxL8uXC2IK8WO/Ry0MHyRLYuDg1Gqe', 1, 1, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `almacenes`
--
ALTER TABLE `almacenes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `banco`
--
ALTER TABLE `banco`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_moneda` (`id_moneda`);

--
-- Indices de la tabla `lista_productos`
--
ALTER TABLE `lista_productos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_almacen_2` (`id_almacen`),
  ADD KEY `id_almacen` (`id_almacen`),
  ADD KEY `id_producto` (`id_producto`),
  ADD KEY `id_moneda` (`id_moneda`);

--
-- Indices de la tabla `lote`
--
ALTER TABLE `lote`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_lista_producto` (`id_lista_producto`),
  ADD KEY `id_transaccion` (`id_transaccion`);

--
-- Indices de la tabla `moneda`
--
ALTER TABLE `moneda`
  ADD PRIMARY KEY (`id_moneda`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_almacen` (`id_almacen`);

--
-- Indices de la tabla `transacciones`
--
ALTER TABLE `transacciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user` (`user`),
  ADD KEY `estatus` (`estado`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `almacenes`
--
ALTER TABLE `almacenes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `banco`
--
ALTER TABLE `banco`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `lista_productos`
--
ALTER TABLE `lista_productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `lote`
--
ALTER TABLE `lote`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `moneda`
--
ALTER TABLE `moneda`
  MODIFY `id_moneda` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `transacciones`
--
ALTER TABLE `transacciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=96;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `banco`
--
ALTER TABLE `banco`
  ADD CONSTRAINT `banco_ibfk_1` FOREIGN KEY (`id_moneda`) REFERENCES `moneda` (`id_moneda`);

--
-- Filtros para la tabla `lista_productos`
--
ALTER TABLE `lista_productos`
  ADD CONSTRAINT `lista_productos_ibfk_1` FOREIGN KEY (`id_almacen`) REFERENCES `almacenes` (`id`),
  ADD CONSTRAINT `lista_productos_ibfk_2` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id`),
  ADD CONSTRAINT `lista_productos_ibfk_3` FOREIGN KEY (`id_moneda`) REFERENCES `moneda` (`id_moneda`);

--
-- Filtros para la tabla `lote`
--
ALTER TABLE `lote`
  ADD CONSTRAINT `lote_ibfk_1` FOREIGN KEY (`id_transaccion`) REFERENCES `transacciones` (`id`),
  ADD CONSTRAINT `lote_ibfk_2` FOREIGN KEY (`id_lista_producto`) REFERENCES `lista_productos` (`id`);

--
-- Filtros para la tabla `transacciones`
--
ALTER TABLE `transacciones`
  ADD CONSTRAINT `transacciones_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
