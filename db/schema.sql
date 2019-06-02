drop database if exists burger_db;

use burger_db;

create table burgers (
    id int AUTO_INCREMENT,
    burger_name VARCHAR(255),
    devoured boolean,
    primary key (id)
);