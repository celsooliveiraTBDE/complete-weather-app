
var userStuff = require("./user.js");
var adminStuff = require("./admin.js");// basic logic

var choice = process.argv[2];

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
    console.log("New User:", newUser);
 })
switch(choice) {

    case 'user':
    console.log("Hi user")  
    generateuser(username, userLocation)

  
   
  ;
    break;
    case 'admin':
    console.log("HI admin")  
    WeatherAdmin.GetData(); 
  
   
  ;
    break;
}
// arguments

//conditionals admin or user?

// call aappropriate (get data or user search)