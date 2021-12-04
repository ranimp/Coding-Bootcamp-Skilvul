-- create db
CREATE DATABASE skilvulmusicstreaming;

-- use db
USE skilvulmusicstreaming;

-- create table user
CREATE TABLE user (
    user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL DEFAULT '',
    email VARCHAR(50) NOT NULL DEFAULT '',
    password VARCHAR(50) NOT NULL DEFAULT ''
);
DESC user;

-- create table singer
CREATE TABLE singer (
    singer_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL DEFAULT ''
);
DESC singer;

-- create table album
CREATE TABLE album (
    album_id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL DEFAULT '' COLLATE 'utf8_general_ci',
    PRIMARY KEY (album_id) USING BTREE
);
DESC album;

-- create table track
CREATE TABLE track (
    track_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(50) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
    singer INT NOT NULL, 
    album INT NOT NULL,
    CONSTRAINT fk_album FOREIGN KEY (album) REFERENCES album(album_id) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT fk_singer FOREIGN KEY (singer) REFERENCES singer(singer_id) ON UPDATE CASCADE ON DELETE CASCADE
);
DESC track;

-- create table playlist
CREATE TABLE playlist (
    playlist_id INT NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    user_id INT NOT NULL,
    CONSTRAINT user FOREIGN KEY (user_id) REFERENCES user(user_id) ON UPDATE CASCADE ON DELETE CASCADE
);
DESC playlist;

-- create table conjunction
CREATE TABLE playlist_track (
    playlist_id INT NOT NULL,
    track_id INT NOT NULL,
    CONSTRAINT fk_playlist FOREIGN KEY (playlist_id) REFERENCES playlist(playlist_id) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT fk_track FOREIGN KEY (track_id) REFERENCES track(track_id) ON UPDATE CASCADE ON DELETE CASCADE
);
DESC playlist_track;


