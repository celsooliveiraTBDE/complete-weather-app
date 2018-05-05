var inquirer = require ("inquirer");
var fs = require("fs");
var textFile = "log.txt"

//create a constructor function for input 
function User (name, location) {
    this.name = name;
    this.location = location; 
}

//inquire prompts for the user 
inquirer.prompt([
    {
        name: "Name",
        message: "Name: "
    },
    {
        name: "Location",
        message: "Location: "
    },
    ]).then(function(input){
        var newUser = new User(
            input.name,
            input.location
        ); 
        console.log(JSON.stringify(newUser));
    }
 );

 fs.append(textFile, input, function(err){
     if (err){
         console.log(err);
     }
     else {
         console.log("User Logged");
     }
 })
