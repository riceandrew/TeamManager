DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE employees(
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(45) NOT NULL,
  last_name VARCHAR(45) NOT NULL,
  role_id INT,
  index rol_ind (role_id),
  manager_id INT,
  index man_ind (manager_id),
  PRIMARY KEY (id)
);

CREATE TABLE role(
id INT NOT NULL AUTO_INCREMENT,
title VARCHAR(30) NOT NULL,
salary DECIMAL,
department_id INT,
index dp_id (department_id),
PRIMARY KEY (id)
);

create table department(
id int, 
name VARCHAR(30),
PRIMARY KEY (id)
);
