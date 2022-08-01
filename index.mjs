import { Fighter } from "./src/Fighter.mjs";
import { Shield } from "./src/Shield.mjs";
import { Weapon } from "./src/Weapon.mjs";
const Sword = new Weapon("Sword", 10);
const WoodenShield = new Shield("Shield", 10);
const Hercules = new Fighter(
  "Hercules",
  20,
  6,
  Sword.damage,
  WoodenShield.protection
);

const Lion = new Fighter("Lion", 11, 13);
const Boar = new Fighter("Boar", 25, 12);

for (let i = 101; Boar.life && Hercules.life > 0; i--) {
  Hercules.fight(Boar);
  Boar.fight(Hercules);
}
