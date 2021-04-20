// Soldier
class Soldier {
  constructor(h, s) {
    this.health = h;
    this.strength = s;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}

// Viking

class Viking extends Soldier {
  constructor(n, h, s) {
    super(h, s);
    this.name = n;
  }
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > damage) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon

class Saxon extends Soldier {
  constructor(h, s) {
    super(h, s);
  }
  receiveDamage(damage) {
      this.health = this.health - damage;
    // super.receiveDamage(damage);
    if (this.health > damage) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      `A Saxon has died in act of combat`;
    }
  }
}

// War

class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
addViking(viking) {
    this.vikingArmy.push(viking);
}
addSaxon(saxon) {
    this.saxonArmy.push(saxon);
}

// vikingAttack(){}

// saxonAttack(){}

showStatus() {
if (this.saxonArmy.length == 0){
    return `Vikings have won the war of the century!`;
}
else if (this.vikingArmy.length == 0){
    return `Saxons have fought for their lives and survived another day...`;
}
else if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1)
return `Vikings and Saxons are still in the thick of battle.`;
}
}
