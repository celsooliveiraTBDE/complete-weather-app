var inquirer = require ("inquirer")

//create a constructor function for input 
function User (name, location) {
    this.name = name;
    this.location = location; 
}

//inquire prompts for the user 
inquirer.prompt([
    {
        name: "name",
        message: "Name: "
    },
    {
        name: "location",
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
