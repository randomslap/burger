drop database if exists burger_db;

create database burger_db;

use burger_db;

create table burgers (
    id int AUTO_INCREMENT,
    burger_name VARCHAR(255) not null,
    devoured boolean not null,
    primary key (id)
);