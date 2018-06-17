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
    this.type = 'chamber';
    this.message = '';
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

class Enemy {
  constructor() {
    this.name = null;
    this.type = null;
    this.maxHealth = 0;
    this.currentHealth = 0;
    this.attackRating = 0;
    this.goldDrop = 0;
    this.healingPotionDrop = 0;
  }
}

module.exports = {
  Door : Door,
  Room : Room
}
