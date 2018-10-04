CREATE DATABASE burgers_db;
USE burgers_db;
CREATE table burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(44) not NULL,
    devoured boolean DEFAULT false,
    primary key (id) 

)