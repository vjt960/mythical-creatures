class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }
  stare(person){
    if (this.statues.length === 3) {
      this.statues[0].stoned = false;
      this.statues.shift();
    }
    this.statues.push(person);
    person.stoned = true;
  }
}

module.exports = Medusa;