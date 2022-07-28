const MAX_LIFE = 100;

export class Fighter {
  constructor(name, strength, dexterity) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = MAX_LIFE;
  }

  fight(obj) {
    const damage =
      Math.ceil(Math.random() * this.strength) -
      Math.ceil(Math.random() * obj.dexterity);
    if (damage < 0) obj.life = obj.life;
    else obj.life = obj.life - damage;
    console.log(
      `${obj.name} got ${damage} of damage. It has ${obj.life} hit points left`
    );
    this.isAlive();
  }
  isAlive() {
    if (this.life > 0)
      console.log(`${this.name} has  ${this.life} health left`);
    else console.log(`${this.name} id dead`);
  }
}
