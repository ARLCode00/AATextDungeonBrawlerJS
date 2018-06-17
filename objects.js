class Chest {
    constructor(gold, healingPotion, randomEncounter) {
      this.gold = gold;
      this.healingPotion = healingPotion;
      this.randomEncounter = randomEncounter;
    }
  
    isEmpty() {
      return this.gold == 0 && this.healingPotion == 0;
    }
  
    notEmpty() {
      return ! this.isEmpty();
    }
  
    empty() {
      this.gold = 0;
      this.healingPotion = 0;
      this.randomEncounter = false;
    }
  }
  
  class Door {
    constructor() {
      this.name = null;
      this.locked = true;
      this.lockType = 'key';
      this.key = null;
      this.riddle = null;
      this.riddleAnswer = null;
      this.diceValue = 0;
    }
  }

  class Room {
    constructor() {
      this.name = null;
      this.type = null;
      this.message = null;
      this.north = null;
      this.south = null;
      this.east = null;
      this.west = null;
      this.doorNorth = null;
      this.doorSouth = null;
      this.doorEast = null;
      this.doorWest = null;
    }
  }

  module.exports = {
    Chest, Chest,
    Door : Door,
    Room : Room
  }