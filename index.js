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
            choices: ["View All Employees", "View All Employees By Department", "View All Employees By Manager", "Add Employee", "Remove Employee", "Update Employee Role", "Update Employee Manager", "View All Roles", "Add Role", "Remove Role", "EXIT"]
        })
        .then(function(answer){
            const userChoice = answer.FirstAction;

            switch (userChoice) {
                case "View All Employees":
                    console.log("view all ems")
                    break;
                case "View All Employees By Department":
                    console.log("view all by dept")
                    break;
                case "View All Employees By Manager":
                    console.log("view all by manager")
                    break;
                case "Add Employee":
                    console.log("add em")
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
  }