class Ogre {
  constructor(name, home) {
    this.name = name;
    this.home = home;
    if (this.home === undefined) {
      this.home = 'Swamp';
    }
    this.swings = 0;
  }
  encounter(human) {
    human.encounterCounter += 1;
    if (human.noticesOgre()) {
      this.swings += 1;
      if (this.swings === 2) {
        human.knockedOut = true;
      }
    }
  }
  swingAt(human) {
    this.swings += 1;
  }
  apologize(human) {
    human.knockedOut = false;
  }
}

module.exports = Ogre;