-- show db
SHOW DATABASES;

-- create db
CREATE DATABASE bookstore;

-- use db
USE bookstore;

-- show tables
SHOW TABLES;

-- create table
CREATE TABLE `books` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `author1` VARCHAR(100) NOT NULL,
    `author2` VARCHAR(100),
    `author3` VARCHAR(100),
    `title` VARCHAR(100),
    `description` TEXT,
    `place_sell` CHAR(3),
    `stock` INT DEFAULT(0),
    `creation_date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- update books
ALTER TABLE `books`
ADD `price` INT,
    status ENUM('available', 'out of stock', 'limited');

ALTER TABLE `books`
DROP COLUMN `place_sell`;

-- insert data
INSERT INTO `books`
    (`id`, `author1`, `author2`, `author3`, `title`, `description`, `creation_date`, `price`, `status`, `stock`)
VALUES
    (1, 'siti', 'rina', 'bima', 'judul 1', 'ini deskripsi 1', '2021-11-12 12:12:12', 50000, 'available', 20),
    (2, 'vita', 'sakti', '', 'judul 2', 'ini deskripsi 2', '2021-11-12 12:12:12', 50000, 'available', 10),
    (3, 'nara', 'dimas', '', 'judul 3', 'ini deskripsi 3', '2021-11-12 12:12:12', 50000, 'available', 25)
;

-- select semua row
SELECT * FROM `books`;

-- select alias
SELECT id AS ID, author1 AS A1, author2 AS A2, author3 AS A3 FROM `books`;

-- select where id
SELECT * FROM `books` WHERE id = 1;

-- select where AND
SELECT * FROM `books` WHERE id = 1 AND author1 = 'siti';

-- select where OR
SELECT * FROM `books` WHERE id = 1 OR author1 = 'nara';

-- select where NOT
SELECT * FROM `books` WHERE NOT id = 1;

-- select ASC id
SELECT * FROM `books` ORDER BY id ASC;

-- select limit 2
SELECT * FROM `books` LIMIT 2;

-- update column author1 & price
UPDATE `books` SET author1 = 'pratama', title = 'buku 2' WHERE id = 2;

-- delete 1 row
DELETE from `books` WHERE id = 3;

