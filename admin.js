// require packages

// retrieve information from Usersearch
var fs = require("fs");
//create a constructor function for input 
var WeatherAdmin = function() {
this.getData = function(){




fs.readFile('log.txt', "utf8", function(error, data){
    console.log(data)
});

}
}
module.exports = WeatherAdmin;

