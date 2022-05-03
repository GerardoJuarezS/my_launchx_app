/* Importing the MissionCommander class from the missionCommander.js file. */
const MissionCommander = require('./app/missionCommander');
/* Creating a new instance of the MissionCommander class and assigning it to the variable carlo. */
const carlo = new MissionCommander("Carlo")
console.log(carlo.name)