USE `db_employee_tracker`;

INSERT INTO `db_employee_tracker`.`department` (`name`) VALUES 
('Accounting'), 
('HR'), 
('Software Development');

INSERT INTO `db_employee_tracker`.`role`(`title`, `salary`, `department_id`)
VALUES
('Manager', 72000.50 , 1),
('Accountant', 52000.50 , 1),
('Manager', 71000.50 , 2),
('Recruiter', 51000.50 , 2),
('Manager', 171000.50 , 3),
('Developer', 151000.50 , 3);

INSERT INTO `db_employee_tracker`.`employee`
(`first_name`,`last_name`,`role_id`,`manager_id`)
VALUES
('Paula','Tick', 3, NULL),
('Chustin','Tick', 4, 1),
('Charlie','Horse', 1, NULL),
('Betty','White', 2, 3),
('Bob','Schmob', 5, NULL),
('Roberta','Shmerta', 6, 5);

