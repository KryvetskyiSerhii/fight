class Arena {
  constructor(hero, monsters) {
    this.hero = hero;
    this.monsters = monsters;
    this.size = 10;
  }

  getDistance(fighter, monster) {
    return Math.sqrt(
      (monster.x - fighter.x) ** 2 + (monster.y - fighter.y) ** 2
    ).toFixed(2);
  }

  isTouchable(att, def) {
    if (this.getDistance(att, def) <= att.getRange()) return true;
  }
}
