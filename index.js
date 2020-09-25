var mysql = require("mysql");
var inquirer = require("inquirer");
const cTable = require('console.table');

var connection = mysql.createConnection({
    host: "localhost",
    // Your port; if not 3306
    port: 8889,
    // Your username
    user: "root",
    // Your password
    password: "root",
    database: "employee_tracker"
});

connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
});

function start() {
    inquirer
        .prompt({
            name: "MainMenu",
            type: "list",
            message: "What would you like to do?",
            choices: ["View All Employees", "View All Employees By Department", "View All Employees By Manager", "Add Employee", "Remove Employee", "Update Employee Role", "Update Employee Manager", "View All Roles", "Add Role", "Remove Role", "EXIT"]
        })
        .then(function (answer) {
            const userChoice = answer.MainMenu;

            switch (userChoice) {
                case "View All Employees":
                    console.log("view all ems")
                    allEmployees();
                    break;
                case "View All Employees By Department":
                    console.log("view all by dept")
                    allDepartments();
                    break;
                case "View All Employees By Manager":
                    console.log("view all by manager")
                    allManagers();
                    break;
                case "Add Employee":
                    console.log("add em")
                    addEmployee();
                    break;
                case "Remove Employee":
                    console.log("remove em")
                    break;
                case "Update Employee Role":
                    console.log("update em role")
                    break;
                case "Update Employee Manager":
                    console.log("update em manager")
                    break;
                case "View All Roles":
                    console.log("view all roles")
                    break;
                case "Add Role":
                    console.log("add role")
                    break;
                case "Remove Role":
                    console.log("rem role")
                    break;
                case "EXIT":
                    console.log("Goodbye!")
                    connection.end();
                    break;


            }
        })
};

function allEmployees() {
    var query = "SELECT e.id, e.first_name, e.last_name, role.title, department.name AS department, role.salary, concat(m.first_name, ' ', m.last_name) AS manager FROM employee e LEFT JOIN employee m ON e.manager_id = m.id INNER JOIN role ON e.role_id = role.id INNER JOIN department ON role.department_id = department.id ORDER BY ID ASC";
    connection.query(query, function (err, res) {
        if (err) throw err;

        console.table(res);
        start();
    })

};

function allDepartments(){

    var query = "SELECT * FROM department"

    connection.query(query, function (err, res){
        if (err) throw err;

        console.table(res);
        start();
    })
};

function allManagers(){
    var query = "SELECT m.id, concat(m.first_name, ' ', m.last_name) AS manager FROM employee m WHERE manager_id IS NULL";
    connection.query(query, function (err, res){
        if (err) throw err;

        console.table(res);
        start();
    })
}


function addEmployee() {

    

    // connection.query("SELECT title FROM role", function(err, results) {
    //     if (err) throw err;

    //     console.log(results);
    // });

    roleChoicesArr = [];
    managerChoicesArr = [];
    // roleIDArr = [];
    // managerIdArr = [];

    connection.query("SELECT id, title FROM role", function (err, results) {
        if (err) throw err;

        for (var i = 0; i < results.length; i++) {
            roleChoicesArr.push(results[i].title)
        }

        // console.log(roleChoicesArr)
    });

    connection.query("SELECT m.id, concat(m.first_name, ' ', m.last_name) AS manager FROM employee m WHERE manager_id IS NULL", function(err, results) {
        if (err) throw err;

        for (var i = 0; i < results.length; i++) {
            managerChoicesArr.push(results[i].manager)
        }

        // console.log(managerChoicesArr);

    });

    // connection.query("SELECT id, title FROM role", function (err, results) {
    //     if (err) throw err;

    //     for (var i = 0; i < results.length; i++) {
    //         roleIDArr.push(results[i])
    //     }

    //     // console.log(roleChoicesArr)
    // });

    // connection.query("SELECT m.id, concat(m.first_name, ' ', m.last_name) AS manager FROM employee m WHERE manager_id IS NULL", function(err, results) {
    //     if (err) throw err;

    //     for (var i = 0; i < results.length; i++) {
    //         managerIdArr.push(results[i])
    //     }

    //     // console.log(managerChoicesArr);

    // });


    inquirer
        .prompt([

            {
                name: "firstName",
                type: "input",
                message: "What is the employee's first name?"
            },

            {
                name: "lastName",
                type: "input",
                message: "What is the employee's last name?",
            },

            {
                name: "role",
                type: "list",
                message: "What is the employee's role",
                choices: roleChoicesArr,

            },

            {
                name: "manager",
                type: "list",
                message: "Who is the employee's manager",
                choices: managerChoicesArr,
            }


        ])
        .then(function(answer){

            connection.query(
                "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?)",
                {
                    first_name: answer.firstName,
                    last_name: answer.lastName,
                    role_id: answer.role,
                    manager_id: answer.manager
                },
                function(err, data){
                    if (err) throw err;
                    console.log("Employee successfully added!")
                    console.table(data)
                    }
            )
        })


}