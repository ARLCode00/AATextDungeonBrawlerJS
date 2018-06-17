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

module.exports = {
    Enemy : Enemy,
    Boss, Boss
  }