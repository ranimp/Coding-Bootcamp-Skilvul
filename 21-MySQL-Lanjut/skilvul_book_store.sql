-- create db
CREATE DATABASE skilvulbookstore;

-- use db
USE skilvulbookstore;

-- create table penerbit
CREATE TABLE penerbit (
    id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(50) NULL,
    kota VARCHAR(50) NULL
);

-- create table penulis
CREATE TABLE penulis (
    id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(50) NULL,
    kota VARCHAR(50) NULL
);

-- create table buku
CREATE TABLE buku (
    id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    penulis_id INT(10) NULL,
    penerbit_id INT(10) NULL,
    ISBN VARCHAR(50) NULL,
    judul VARCHAR(50) NULL,
    harga INT(10) NULL,
    stock INT(10) NULL,
    CONSTRAINT fk_penerbit FOREIGN KEY (penerbit_id) REFERENCES penerbit(id),
    CONSTRAINT fk_penulis FOREIGN KEY (penulis_id) REFERENCES penulis(id)
);

-- insert data ke semua tabel
INSERT INTO penulis(nama, kota) VALUES('Rani', 'Balikpapan');
INSERT INTO penulis(nama, kota) VALUES('Siti', 'Bontang');

INSERT INTO penerbit(nama, kota) VALUES('Dunia', 'Balikpapan');
INSERT INTO penerbit(nama, kota) VALUES('World', 'Samarinda');

INSERT INTO buku(ISBN, judul, penulis_id, penerbit_id, harga, stock)
VALUES ('11191062', 'Ini judul pertama', 2, 2, 110000, 10);
INSERT INTO buku(ISBN, judul, penulis_id, penerbit_id, harga, stock)
VALUES ('11191078', 'Ini judul kedua', 2, 1, 95000, 9);
INSERT INTO buku(ISBN, judul, penulis_id, penerbit_id, harga, stock)
VALUES ('11191089', 'Ini judul ketiga', 1, 1, 85000, 8);

-- INNER JOIN table buku & table penerbit
SELECT * FROM buku INNER JOIN penerbit ON buku.penerbit_id = penerbit.id;

-- LEFT JOIN table buku & table penerbit
SELECT * FROM buku LEFT JOIN penerbit ON buku.penerbit_id = penerbit.id;

-- RIGHT JOIN table buku & table penerbit
SELECT * FROM buku RIGHT JOIN penerbit ON buku.penerbit_id = penerbit.id;

-- Cek nilai MAX dari column harga pada table book yang memiliki jumlah stok buku di bawah 10
SELECT MAX(harga) FROM buku WHERE stock < 10;

-- Cek nilai MIN dari column harga pada table buku
SELECT MIN(harga) FROM buku;

-- list data dengan kondisi harga buku di bawah 100000
SELECT COUNT(id) FROM buku WHERE harga < 100000;