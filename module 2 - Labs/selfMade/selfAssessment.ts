let sizeDiceNum: number = 100;
let sizeDice: string = `${sizeDiceNum}px`;
let borderDiceNum: number = 5;
let borderDice: string = `${borderDiceNum}px`
let borderDiceColor: string = 'green';
let colorDice: string = 'red';
let diceSet: Array<DiceSet> = [];

interface DiceSet {
  'dice': Element
}

for (let index: number = 0; index < 4; index++) {
  diceSet.push({
    'dice': document.createElement('div')
  });
}

let getRandomIntDice: Function = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}


enum DiceNumbers {
  One,
  Two,
  Three,
  Four,
  Five,
  Six
}

class rollingDice {
  div: Element;
  constructor(div: Element) {
    this.div = div;
  }
  diceRolling(number: string): boolean {
    (this.div as HTMLElement).innerHTML = number;
    return true;
  }
}

class numericDice extends rollingDice {
  static DiceNumbers = DiceNumbers;
  constructor(div: Element) {
    super(div);
    (this.div as HTMLElement).style.width = sizeDice;
    (this.div as HTMLElement).style.height = sizeDice;
    (this.div as HTMLElement).style.border = `${borderDice} solid ${borderDiceColor}`;
    (this.div as HTMLElement).style.display = 'flex';
    (this.div as HTMLElement).style.alignItems = 'center';
    (this.div as HTMLElement).style.justifyItems = 'center';
  }
  diceRolling(number: string): boolean {
    (this.div as HTMLElement).innerHTML = DiceNumbers[number];
    return true;
  }
}

let button = document.createElement('button');
button.textContent = 'Dice!';
document.body.appendChild(button);

diceSet.map( (elem, index) => {
  let diceRollingClass = new numericDice(elem.dice);
  document.body.appendChild(elem.dice);
});

(button).onclick = (event) => {
  diceSet.map( (elem, index) => {
    let diceRollingClass = new numericDice(elem.dice);
    diceRollingClass.diceRolling(getRandomIntDice(0, 5));
  })
}