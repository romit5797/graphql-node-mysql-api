CREATE DATABASE  IF NOT EXISTS `testdb`;
USE `testdb`;

/*------------DRIVERS-------------*/
DROP TABLE IF EXISTS `drivers`;
CREATE TABLE `drivers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `age` int(3) NOT NULL DEFAULT '0',
  `email` varchar(45) NOT NULL,
  `phone` varchar(12) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
--
-- Dumping data for table `drivers`
--
LOCK TABLES `drivers` WRITE;
INSERT INTO `drivers` VALUES (1,"Rock",22,"rock@gmail.com","123456789"),(2,"Steve",23,"steve@gmail.com","123456781"),(3,"Brian",24,"brian@gmail.com","123456782"),(4,"Shawn",24,"shawn@gmail.com","123456783");
UNLOCK TABLES;

/*------------UNITS-------------*/
DROP TABLE IF EXISTS `units`;
CREATE TABLE `units` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `make` varchar(45) NOT NULL,
  `model` varchar(45) NOT NULL,
  `year` int(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
--
-- Dumping data for table `units`
--
LOCK TABLES `units` WRITE;
INSERT INTO `units` VALUES (1,"Lockheed Martin","F-22 Raptor", 2005),(2,"Dassault","Rafale", 2001),(3,"Lockheed Martin","SR-71", 1966);
UNLOCK TABLES;

/*------------ORDERS-------------*/
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `origin` varchar(45) NOT NULL,
  `destination` varchar(45) NOT NULL,
  `deliveryDate` TIMESTAMP NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
--
-- Dumping data for table `orders`
--
LOCK TABLES `orders` WRITE;
INSERT INTO `orders` VALUES (1,"Canada","USA","2021-01-09 03:14:07"),(2,"Canada","Australia","2021-02-09 03:14:07"),(3,"Mexico","India","2021-03-09 03:14:07");
UNLOCK TABLES;