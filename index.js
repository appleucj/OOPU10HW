const inquirer = require("inquirer");
const fs = require("fs");
inquirer
    .prompt([
        {
            type: "list",
            message: "What is your title?",
            name: "title",
            choices: ["Manager", "Engineer", "Intern"],
        }
    ])
    .then(({ answers }) => {
        // writeFileSync();
        if (answers === "Manager") {
            NavigationPreloadManager();
        };


        function NavigationPreloadManager() {
            inquirer
                .prompt([
                    {
                        type: "input",
                        message: "What is your name?",
                        name: "name",

                    }
                ])
                .then(({ name }) => {
                    //const nameToWrite = name;
                    // writeFileSync();
                });

            inquirer
                .prompt([
                    {
                        type: "input",
                        message: "What is your email?",
                        name: "email",

                    }
                ])
                .then(({ email }) => {
                    //const emailToWrite = email;
                    // writeFileSync();
                });

            inquirer
                .prompt([
                    {
                        type: "input",
                        message: "What is your ID?",
                        name: "ID",

                    }
                ])
                .then(({ ID }) => {
                    //const emailToWrite = email;
                    // writeFileSync();
                });

            inquirer
                .prompt([
                    {
                        type: "input",
                        message: "What is your office number?",
                        name: "office",

                    }
                ])
                .then(({ office }) => {
                    //const emailToWrite = email;
                    // writeFileSync();
                });

        };



        inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is your github name?",
                    name: "github",

                }
            ])
            .then(({ github }) => {
                //const githubToWrite = github;
                //writeFileSync();
            }