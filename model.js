class Character {
  constructor(name, maxHealth, attackRating, blockRating) {
    this.name = name;
    this.maxHealth = maxHealth;
    this.currentHealth = maxHealth;
    this.attackRating = attackRating;
    this.blockRating = blockRating;
  }

  getTitle() {
    return this.name;
  }
}

class Enemy extends Character {
  constructor(type, maxHealth, attackRating, blockRating, goldDrop, healingPotionDrop, keyDrop) {
    super(maxHealth, attackRating, blockRating);
    this.type = type;
    this.goldDrop = goldDrop;
    this.healingPotionDrop = healingPotionDrop;
    this.keyDrop = keyDrop;
    this.spawn = null;
  }

  getTitle(capitalized) {
    var vowels = 'AaEeIiOoUu';
    if (vowels.includes(this.type.substring(0, 1))) {
      return capitalized ? 'An ' + this.type : 'an ' + this.type;
    }
    else {
      return capitalized ? 'A ' + this.type : 'a ' + this.type;
    }
  }
}

class Boss extends Enemy {
  constructor(final, type, maxHealth, attackRating, blockRating, goldDrop, healingPotionDrop, keyDrop) {
    super(type, maxHealth, attackRating, blockRating, goldDrop, healingPotionDrop, keyDrop);
    this.final = false;
  }
}

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
  Enemy : Enemy,
  Boss, Boss,
  Chest, Chest,
  Door : Door,
  Room : Room
}
