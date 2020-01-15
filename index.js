var inquirer = require("inquirer");
var mysql = require("mysql");
var table = require("console.table");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "Murray5446!",
    database: "employees_db"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
});

// function which prompts the user for what action they should take
function start() {
    inquirer
        .prompt({
            name: "selectemployees",
            type: "list",
            message: "What would you like to do?",
            choices: ["VIEW ALL EMPLOYEES", "VIEW ALL DEPARTMENTS", "VIEW ALL ROLES", "ADD EMPLOYEE", "REMOVE EMPLOYEE", "UPDATE EMPLOYEE ROLE", "UPDATE EMPLOYEE MANAGER"]
        })
        .then(function (answer) {
            // based on their answer, either call the bid or the post functions
            if (answer.selectemployees === "VIEW ALL EMPLOYEES") {
                listEmployees();
            }
            else if (answer.selectemployees === "VIEW ALL DEPARTMENTS") {
                viewAllDepartments();
            }
            else if (answer.selectemployees === "VIEW ALL ROLES") {
                listByRole();
            }
            else if (answer.selectemployees === "ADD EMPLOYEE") {
                addEmployee();
            }
            else if (answer.selectemployees === "REMOVE EMPLOYEE") {
                removeEmployee();
            }
            else if (answer.selectemployees === "UPDATE EMPLOYEE ROLE") {
                updateRole();
            }
            else if (answer.selectemployees === "UPDATE EMPLOYEE MANAGER") {
                updateDepartment();
            }
            else {
                connection.end();
            }
        });
}

// function to display all employees
function listEmployees() {
    connection.query('SELECT employees.id, employees.first_name, employees.last_name, role.title, role.salary, department.name FROM employees LEFT JOIN role ON role_id = role.id LEFT JOIN department ON department_id = department.id', 
    function(err, res) {
        if (err) throw err;
        console.table(res);
        start();
    })
}
// function to display all departments
function viewAllDepartments() {
    connection.query('SELECT department.id, department.name FROM department',
    function(err, res) {
        if (err) throw err;
        console.table(res);
        start();
    })
}
// function to display all roles
function listByRole() {
    connection.query(`SELECT role.id, role.title, role.salary, department.name FROM role LEFT JOIN department ON department_id = department.id`,
    function(err, res){
        if (err) throw err;
        console.table(res);
        start();
    })
}
// function to add employees to database
function addEmployee() {
    inquirer
        .prompt([
            {
                name: "firstname",
                type: "input",
                message: "What is the first name of the new employee?"
            },
            {
                name: "lastname",
                type: "input",
                message: "What is the last name of the new employee?"
            },
            {
                name: "role",
                type: "list",
                message: "What is the role of the new employee?",
                choices: [1, 2, 3, 4],
            },
            {
                name: "manager",
                type: "list",
                message: "Who is the new employee's manager?",
                choices: [1, 2, 3, 4],
            }
        ])
        .then(function (answer) {
            // when finished prompting, insert a new item into the db with that info
            connection.query(
                "INSERT INTO employees SET ?",
                {
                    first_name: answer.firstname,
                    last_name: answer.lastname,
                    role_id: answer.role,
                    manager_id: answer.manager,
                },
                function (err) {
                    if (err) throw err;
                    console.log("Employee logged successfully!");

                    start();
                }
            );
        });
}
// function to remove employees from database
function removeEmployee() {
    connection.query('SELECT * FROM employees', function (err, res) {
        if (err) throw err;
        var empList = [];
        for (var i = 0; i < res.length; i++) {
            empList.push(res[i].first_name);
        };
        console.log(empList);
        inquirer
            .prompt([
                {
                    type: "list",
                    name: "removeEmp",
                    message: "Which employee would you like to remove?",
                    choices: empList,
                    
                }
            ])
            .then(data => {
                connection.query(
                    `DELETE FROM employees
                    WHERE first_name = "${data.removeEmp}";`
                    
                    , function (err, res) {
                        if (err) throw err;
                        console.log("Here is the updated employees");
                        start()
                        
                    }
                )
            })
    }
    )}

// function to update a role of existing employee
function updateRole() {

}
// function to update the department of existing employee
function updateDepartment() {

}