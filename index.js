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

  connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
  });

  function start(){
      inquirer  
        .prompt({
            name: "FirstAction",
            type: "list",
            message: "What would you like to do?",
            choices: ["View All Employees", "View All Employees By Department", "View All Employees By Manager", "Add Employee", "Remove Employee", "Update Employee Role", "Update Employee Manager", "View All Roles", "Add Role", "Remove Role"]
        })
  }