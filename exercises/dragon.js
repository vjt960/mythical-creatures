class Dragon {
  constructor(name, rider, color) {
    this.name = name;
    this.rider = rider;
    this.color = color;
    this.hungry = true;
    this.belly = 0;
  }
  eat() {
    this.belly += 1;
    if (this.belly === 3) {
      this.hungry = false;
    }
  }
}

module.exports = Dragon;