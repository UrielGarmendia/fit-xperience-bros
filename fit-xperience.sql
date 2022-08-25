create database fit_xperience;
show databases;
use fit_xperience;
CREATE TABLE `fit_xperience`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(150) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `email` VARCHAR(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE);
-- -------------------------------------
CREATE TABLE `fit_xperience`.`products` (
  `id` INT NOT NULL,
  `id_user` INT NOT NULL,
  `name` VARCHAR(150) NOT NULL,
  `price` INT NOT NULL,
  `image` BLOB NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY(id_user) REFERENCES users(id),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);
-- ---------------------------------------  
  
  