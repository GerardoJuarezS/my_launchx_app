/* Importing the MissionCommander class from the missionCommander.js file. */
const MissionCommander = require('./../app/missionCommander');
const mymissionCommander = new MissionCommander("Woopa")
describe("Unit Tests for Mission Commander Class", () => {
    test ('1) Create a mission commander objet', () => {
        /* Checking to see if the name of the mission commander is "Woopa". */
        expect(mymissionCommander.name).toBe("Woopa");
      /* Creating a variable called result and assigning it the value of 1 + 2. */
      const result = 1 + 2 
      /* A test to see if the result of 1 + 2 is 3. */
      expect(result).toBe(3);
    });
  })