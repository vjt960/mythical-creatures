class Centaur {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.stamina = 3;
  }
  shoot() {
    if (this.stamina === 0 || this.layingDown === true) {
      return 'NO!';
    }
    this.stamina -= 1;
    if (this.stamina === 0) {
      this.cranky = true;
    }
    return 'Twang!!!';
  }
  run() {
    if (this.layingDown === true) {
      return 'NO!';
    }
    this.stamina -= 1;
    if (this.stamina === 0) {
      this.cranky = true;
    }
    return 'Clop clop clop clop!!!';
  }
  sleep() {
    if (this.standing === true) {
      return 'NO!';
    } else if (this.standing === false) {
      this.cranky = false;
      this.stamina = 3;
      return 'ZZZZ';
    }
  }
  layDown() {
    this.layingDown = true;
    this.standing = false;
  }
  standUp() {
    this.standing = true;
    this.layingDown = false;
  }
  drinkPotion() {
    if (this.layingDown === true) {
      return 'Not while I\'m laying down!';
    }
    this.cranky = !this.cranky;
  }
}

module.exports = Centaur;