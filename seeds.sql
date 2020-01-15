INSERT INTO employees_db.department (ID, Name) VALUES (1, Accounting);
INSERT INTO employees_db.department (ID, Name) VALUES (2, Human Resources);
INSERT INTO employees_db.department (ID, Name) VALUES (3, Sales);
INSERT INTO employees_db.department (ID, Name) VALUES (4, Management);

INSERT INTO `employees_db`.`role` (`ID`, `title`, `salary`, `department_ID`) VALUES ('1', 'Sales', '60000', '3');
INSERT INTO `employees_db`.`role` (`ID`, `title`, `salary`, `department_ID`) VALUES ('2', 'Human Resources', '75000', '1');
INSERT INTO `employees_db`.`role` (`ID`, `title`, `salary`, `department_ID`) VALUES ('3', 'Finance', '250000', '4');
INSERT INTO `employees_db`.`role` (`ID`, `title`, `salary`, `department_ID`) VALUES ('4', 'Management', '65000', '2');

INSERT INTO `employees_db`.`employee` (`ID`, `first_name`, `last_name`, `role_id`, `manager_id`) VALUES ('1', 'Luke', 'Guffy', '3', '1');
INSERT INTO `employees_db`.`employee` (`ID`, `first_name`, `last_name`, `role_id`, `manager_id`) VALUES ('2', 'Joeseph', 'Ruiz', '4', '1');
INSERT INTO `employees_db`.`employee` (`ID`, `first_name`, `last_name`, `role_id`, `manager_id`) VALUES ('3', 'Dalton', 'Coleman', '1', '1');
INSERT INTO `employees_db`.`employee` (`ID`, `first_name`, `last_name`, `role_id`, `manager_id`) VALUES ('4', 'Morgan', 'Dodson', '2', '1');