const MissionCommander = require('./../app/missionCommander');
const mymissionCommander = new MissionCommander("Woopa")
describe("Unit Tests for Mission Commander Class", () => {
    test ('1) Create a mission commander objet', () => {
        expect(mymissionCommander.name).toBe("Woopa");
      const result = 1 + 2 
      expect(result).toBe(3);
    });
  })