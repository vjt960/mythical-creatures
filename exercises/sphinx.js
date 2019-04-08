class Sphinx {
  constructor(name) {
    this.name = name;
    this.riddles = [];
    this.heroesEaten = 0;
  }
  collectRiddle(riddle) {
    this.riddles.push(riddle);
    if (this.riddles.length > 3) {
      this.riddles.shift();
    }
  }
  attemptAnswer(ans) {
    var startRiddles = this.riddles.length;
    var correctAnswers = 0;
    for (var i = 0; i < this.riddles.length; i++) {
      if (this.riddles[i].answer === ans) {
        var finalAnswer = this.riddles[i].answer;
        this.riddles.splice(i, 1);
        correctAnswers += 1;
        if (correctAnswers < startRiddles) {
          return 'That wasn\'t that hard, I bet you don\'t get the next one';
          } else if (correctAnswers === startRiddles) {
            return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${finalAnswer}"???`;
            }
      } 
    }
    if (correctAnswers < 1) {
      this.heroesEaten += 1;
    }
  }
}


module.exports = Sphinx;