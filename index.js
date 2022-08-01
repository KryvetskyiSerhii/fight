/** Part for the starting instanciation */
/** creating the hero Heracles */

const Hercules = new Hero("👨 Heracles", 20, 6, "./images/heracles.svg", 5, 5);

/** Creating his weapon and associating it */
const weapon = new Weapon("sword", 10, "./images/sword.svg");

const bow = new Weapon("bow", 8, "./images/bow.svg", 5);
Hercules.weapon = bow;
/** Creating his shield and associating it */
const shield = new Shield("shield", 10, "./images/shield.svg");
Hercules.shield = shield;

/** Creating all of his adversaries */
const bird1 = new Monster("Bird", 25, 12, "./images/bird.svg", 2, 3);
const bird2 = new Monster("Bird", 25, 12, "./images/bird.svg", 6, 8);
const bird3 = new Monster("Bird", 25, 12, "./images/bird.svg", 6, 5);

/** Creating the hero section in the html */
const fighterHtml = new FightersTemplate("fighters");
fighterHtml.createTemplate(Hercules, bird1);

/** Your code goes here */
const arena = new Arena(Hercules, [bird1, bird2, bird3]);
const ArenaHTML = new ArenaTemplate("arena");
ArenaHTML.createArena(arena);
/** Do not touch => allow the opening / closing of the hero information section */
let openingModal = true;
const openModal = () => {
  if (openingModal) {
    const heroInfo = new HeroInfoTemplate("heroInfo");
    heroInfo.createHeroInfoTemplate(Hercules);
    document.getElementById("heroInfo").style.display = "flex";
    openingModal = false;
  }
};

const closeModal = () => {
  const heroInfo = document.getElementById("heroInfo");
  heroInfo.style.display = "none";
  heroInfo.innerHTML = "";
  openingModal = true;
};
