USE Employee_Tracker;

INSERT INTO department (id, name)
VALUES (1, "Sales");

INSERT INTO department (id, name)
VALUES (2, "Finance");

INSERT INTO department (id, name)
VALUES (3, "Engineering");

INSERT INTO department (id, name)
VALUES (4, "Human Resources");


INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Senior Salesperson", 100000, 1);

INSERT INTO role (id, title, salary, department_id)
VALUES (2, "Salesperson", 60000, 1);

INSERT INTO role (id, title, salary, department_id)
VALUES (3, "Accountant", 75000, 2);

INSERT INTO role (id, title, salary, department_id)
VALUES (4, "Software Engineer", 120000, 3);

INSERT INTO role (id, title, salary, department_id)
VALUES (5, "HR Rep", 60000, 4);

INSERT INTO role (id, title, salary, department_id)
VALUES (6, "Junior Engineer", 70000, 3);

INSERT INTO role (id, title, salary, department_id)
VALUES (7, "Senior Engineer", 150000, 3);

INSERT INTO role (id, title, salary, department_id)
VALUES (8, "Junior Accountant", 50000, 2);

INSERT INTO role (id, title, salary, department_id)
VALUES (9, "Senior Accountant", 110000, 2);

INSERT INTO role (id, title, salary, department_id)
VALUES (10, "Senior HR Rep", 80000, 4);



INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Michael", "Scott", 1, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (2, "Jim", "Halpert", 2, 1);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (3, "Angela", "Martin", 9, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (4, "Creed", "Bratton", 7, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (5, "Ryan", "Howard", 6, 5);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (6, "Toby", "Flenderson", 10, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (7, "Kelly", "Kapowski", 5, 6);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (8, "Dwight", "Schrute", 2, 1);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (9, "Dwight", "Schrute", 2, 1);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (10, "Keivn", "Malone", 3, 3);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (11, "Oscar", "Martinez", 3, 3);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (12, "Keivn", "Malone", 8, 3);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (13, "Pam", "Beesly", 4, 4);
