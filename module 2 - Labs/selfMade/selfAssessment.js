var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var sizeDiceNum = 100;
var sizeDice = sizeDiceNum + "px";
var borderDiceNum = 5;
var borderDice = borderDiceNum + "px";
var borderDiceColor = 'green';
var colorDice = 'red';
var diceSet = [];
for (var index = 0; index < 4; index++) {
    diceSet.push({
        'dice': document.createElement('div')
    });
}
var getRandomIntDice = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};
var DiceNumbers;
(function (DiceNumbers) {
    DiceNumbers[DiceNumbers["One"] = 0] = "One";
    DiceNumbers[DiceNumbers["Two"] = 1] = "Two";
    DiceNumbers[DiceNumbers["Three"] = 2] = "Three";
    DiceNumbers[DiceNumbers["Four"] = 3] = "Four";
    DiceNumbers[DiceNumbers["Five"] = 4] = "Five";
    DiceNumbers[DiceNumbers["Six"] = 5] = "Six";
})(DiceNumbers || (DiceNumbers = {}));
var rollingDice = /** @class */ (function () {
    function rollingDice(div) {
        this.div = div;
    }
    rollingDice.prototype.diceRolling = function (number) {
        this.div.innerHTML = number;
        return true;
    };
    return rollingDice;
}());
var numericDice = /** @class */ (function (_super) {
    __extends(numericDice, _super);
    function numericDice(div) {
        var _this = _super.call(this, div) || this;
        _this.div.style.width = sizeDice;
        _this.div.style.height = sizeDice;
        _this.div.style.border = borderDice + " solid " + borderDiceColor;
        _this.div.style.display = 'flex';
        _this.div.style.alignItems = 'center';
        _this.div.style.justifyItems = 'center';
        return _this;
    }
    numericDice.prototype.diceRolling = function (number) {
        this.div.innerHTML = DiceNumbers[number];
        return true;
    };
    numericDice.DiceNumbers = DiceNumbers;
    return numericDice;
}(rollingDice));
var button = document.createElement('button');
button.textContent = 'Dice!';
document.body.appendChild(button);
diceSet.map(function (elem, index) {
    var diceRollingClass = new numericDice(elem.dice);
    document.body.appendChild(elem.dice);
});
(button).onclick = function (event) {
    diceSet.map(function (elem, index) {
        var diceRollingClass = new numericDice(elem.dice);
        diceRollingClass.diceRolling(getRandomIntDice(0, 5));
    });
};
