var inquirer = require ("inquirer");
var weather = require ("weather-js");
var fs = require("fs");
var textFile = "log.txt"



//create a constructor function for input 
function User (name, location) {
    this.name = name;
    this.location = location; 
    this.date = Date.now();

    this.getWeather = function() {
        weather.find({search: this.location, degreeType: "F"}, function(err, result) {
            if(err) {
                console.log(err);
            }
            console.log(JSON.stringify(result, null, 2));
        })
    }
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
    console.log("New User:", newUser);
})   


// Breaks here due to recursion
var appInput = "\nName: " + input.name + "\nLocation: " + input.location;
 fs.append(textFile, appInput , function(err){
     if (err){
         console.log(err);
     }
     else {
        console.log("User Logged");
     }
 })

//  module.exports = {

//  }