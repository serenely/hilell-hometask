
const result1 = prompt('Enter first num');
const result2 = prompt('Enter second num');

const countNum = () => result1 * result2;
const countNum1 = () => +result1 + +result2;
const countNum2 = () => result1 - result2;
const countNum3 = () => result1 / result2;

alert(countNum())
alert(countNum1())
alert(countNum2())
alert(countNum3())

