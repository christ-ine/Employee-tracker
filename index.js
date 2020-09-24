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
            name: "MainMenu",
            type: "list",
            message: "What would you like to do?",
            choices: ["View All Employees", "View All Employees By Department", "View All Employees By Manager", "Add Employee", "Remove Employee", "Update Employee Role", "Update Employee Manager", "View All Roles", "Add Role", "Remove Role", "EXIT"]
        })
        .then(function(answer){
            const userChoice = answer.MainMenu;

            switch (userChoice) {
                case "View All Employees":
                    console.log("view all ems")
                    allEmployees();
                    break;
                case "View All Employees By Department":
                    console.log("view all by dept")
                    break;
                case "View All Employees By Manager":
                    console.log("view all by manager")
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

  function allEmployees(){
      var query = "SELECT e.id, e.first_name, e.last_name, role.title, department.name AS department, role.salary, concat(m.first_name, ' ', m.last_name) AS manager FROM employee e LEFT JOIN employee m ON e.manager_id = m.id INNER JOIN role ON e.role_id = role.id INNER JOIN department ON role.department_id = department.id ORDER BY ID ASC";
      connection.query(query, function(err, res){
          if (err) throw err;

          console.table(res);
          start();
      })

  };

 function addEmployee(){

    connection.query("SELECT * FROM employee WHERE manager_id IS NULL", function(err, results) {
        if (err) throw err;

        console.table(results);
    })

    // inquirer
    //     .prompt([

    //         {
    //             name: "firstName",
    //             type:"input",
    //             message: "What is the employee's first name?"
    //         },

    //         {
    //             name: "lastName",
    //             type:"input",
    //             message: "What is the employee's last name?",
    //         },

    //         {
    //             name: "role",
    //             type: "list",
    //             message: "What is the employee's role",
    //             choices: ["Senior Salesperson", "Salesperson", "Accountant", "Software Engineer", "HR Rep", "Junior Engineer", "Senior Engineer", "Junior Accountant", "Senior Accountant", "Senior HR Rep"]

    //         }
    //     ])
        

 }