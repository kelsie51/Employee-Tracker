const connection = require("./assets/db.config.js");
const add = require("./assets/add");
const view = require("./assets/view");
const deletD = require("./assets/delete");
const up = require("./assets/update")
var inquirer = require("inquirer");

const cTable = require('console.table');


function userInput() {
    inquirer
        .prompt({
            name: "first",
            type: "list",
            message: "What would you like to do?",
            choices: ["ADD", "VIEW", "UPDATE", "DELETE", "EXIT"]
        }).then(function (answer) {
            if (answer.first === "ADD") {
                add.addData();
            }           
            else if (answer.first === "UPDATE") {
                up.updateData();

            }
            else if (answer.first === "VIEW") {
                view.viewData();
            }
            else if (answer.first === "DELETE") {
                deletD.deleteData();

            }
            else {
                console.table("Thank you! Come again!")
                connection.end();
            }
        });
}

exports.userInput = userInput;
userInput();