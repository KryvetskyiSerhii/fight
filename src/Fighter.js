const MAX_LIFE = 100;

class Fighter {
  constructor(name, strength, dexterity, image, x, y) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.image = image;
    this.life = MAX_LIFE;
    this.x = x;
    this.y = y;
    this.range = 1;
  }

  fight(obj) {
    const damage =
      Math.ceil(Math.random() * this.getDamage()) -
      Math.ceil(Math.random() * this.getDefense());
    if (damage < 0) obj.life = obj.life;
    else obj.life = obj.life - damage;
    console.log(
      `${obj.name} got ${damage} of damage. It has ${obj.life} hit points left`
    );
    this.isAlive();
  }
  getDamage() {
    return this.weapon ? this.strength + this.weapon : this.strength;
  }

  getDefense() {
    return this.shield ? this.dexterity + this.shield : this.dexterity;
  }
  isAlive() {
    if (this.life > 0)
      console.log(`${this.name} has  ${this.life} health left`);
    else console.log(`${this.name} is dead`);
  }

  getRange() {
    return this.range;
  }
}

class Hero extends Fighter {
  constructor(name, strength, dexterity, image, x, y) {
    super(name, strength, dexterity, image, x, y);
    this.weapon = null;
    this.shield = null;
    this.range = 1;
  }
  getRange() {
    return this.range + this.weapon.range;
  }
}
class Monster extends Fighter {
  constructor(name, strength, dexterity, image, x, y) {
    super(name, strength, dexterity, image, x, y);
  }
  getDamage() {
    return this.strength;
  }

  getDefense() {
    return this.dexterity;
  }
}
