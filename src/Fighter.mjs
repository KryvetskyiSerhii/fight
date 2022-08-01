const MAX_LIFE = 100;

export class Fighter {
  constructor(name, strength, dexterity, weapon = null, shield = null) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = MAX_LIFE;
    this.weapon = weapon;
    this.shield = shield;
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
}
