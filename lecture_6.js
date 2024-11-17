
// let str = "hello world";
// const symbolsToRemove = ["l", "d"];
// for (let i = 0; i <= 2; i++) {
//     const char = symbolsToRemove[i];
//     str = str.replaceAll(char, "");
// }
//
// console.log(str);

const mixedArray = [1, 'hi', false, 9, 126, {}, null, '10'];
const numbers = mixedArray.filter(item => typeof item === 'number');
let average;
if (numbers.length > 0) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    average = sum / numbers.length;
} else {
    average = null;
}
console.log(average)