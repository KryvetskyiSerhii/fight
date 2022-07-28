import { Fighter } from "./src/Fighter.mjs";

const Hercules = new Fighter("Hercules", 20, 6);

const Lion = new Fighter("Lion", 11, 13);

for (let i = 101; Lion.life > 0; i--) {
  Hercules.fight(Lion);
  Lion.fight(Hercules);
}
