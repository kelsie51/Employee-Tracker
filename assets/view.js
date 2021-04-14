var inquirer = require("inquirer");
const connection = require("./db.config");
const first = require("../server");
const cTable = require('console.table');

function viewData() {
    inquirer
        .prompt({
            name: "view",
            type: "list",
            message: "What do you want to view?",
            choices: ["View all Employees",
                "View Employees by Department",
                "View Departments",
                "View Positions",
                "Go Back To The Main Menu"]
        }).then(function (answer) {
            if (answer.view === "View all Employees") {
                viewAllEmployees();
            }
            else if (answer.view === "View Employees by Department") {
                viewEmployeesByDepart();
            } else if (answer.view === "View Departments") {
                viewDepartments();

            } else if (answer.view === "View Roles") {
                viewPositions();

            } else if (answer.view === "Go Back To The Main Menu") {
                first.userInput();

            } else {
                connection.end();
            }
        });
}
const viewAllEmployees = () => {
    connection.query(
        `SELECT e.first_name AS First_Name, e.last_name AS Last_Name, e.id AS Employee_ID, r.salary AS Salary, r.title AS Position, d.name AS DepartmentName
        FROM employee e LEFT JOIN employee m ON e.manager_id = m.id 
        INNER JOIN role r ON e.id = r.id 
        INNER JOIN department d ON r.id = d.id 
        ORDER BY e.id`,
        function (err, results) {
            if (err) throw err;

            console.table(results, "Error");
            viewData();
        }
    );
}
const viewEmployeesByDepart = () => {
    connection.query(
        `SELECT d.name, e.first_name, e.last_name, e.id AS employee_id, r.salary, r.title 
        FROM employee e 
        LEFT JOIN employee em ON e.manager_id = em.id 
        INNER JOIN role r ON e.id = r.id 
        INNER JOIN department d ON r.id = d.id 
        ORDER BY d.name`,
        function (err, results) {
            if (err) throw err;
            console.table(results);
            viewData();
        }
    )
}
const viewDepartments = () => {
    connection.query(
        `SELECT d.name AS Department, r.title AS Postion, r.salary AS Salary
        FROM department d
        RIGHT JOIN role r ON r.id = d.id
        ORDER BY d.name`,
        function (err, results) {
            if (err) throw err;
            console.table(results);
            viewData();
        }
    )
}
const viewPositions = () => {
    connection.query(
        `SELECT title, salary FROM role
         ORDER BY title `,
        function (err, results) {
            if (err) throw err;
            console.table(results);
            viewData();
        }
    )
}
module.exports = { viewData }