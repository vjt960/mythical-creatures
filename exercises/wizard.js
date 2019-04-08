

class Wizard {
  constructor(obj) {
   this.name = obj.name;
   this.bearded = obj.bearded;
   if (this.bearded === undefined) {
     this.bearded = true;
   }
   this.isRested = true;
   this.magicPoints = 3;
  }
  incantation(spell) {
    return spell.toUpperCase();
  }
  cast() {
    if (this.magicPoints === 0) {
    this.isRested = false;
    return 'I SHALL NOT CAST!'
    }
    this.magicPoints -= 1;
    if (this.magicPoints === 0) {
    this.isRested = false;
    return 'I SHALL NOT CAST!'
    }
    return 'MAGIC BULLET'
  }
}


module.exports = Wizard;