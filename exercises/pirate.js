class Pirate {
  constructor(name,job) {
    this.name = name;
    this.job = job;
    if (this.job === undefined) {
      this.job = "Scallywag";
    }
    this.cursed = false;
    this.karma = 0;
    this.booty = 0;
  }
  commitHeinousAct() {
    this.karma += 1;
    if (this.karma === 3) {
      this.cursed = true;
    }
  }
  robShip() {
    this.booty += 100;
    return "YAARRR!";
  }
}

module.exports = Pirate;