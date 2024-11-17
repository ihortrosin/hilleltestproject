// - 6.1
// let str = "hello world";
// const symbolsToRemove = ["l", "d"];
// for (let i = 0; i <= 2; i++) {
//     const char = symbolsToRemove[i];
//     str = str.replaceAll(char, "");
// }
//
// console.log(str);


// - 6.2
// const mixedArray = [1, 'hi', false, 9, 126, {}, null, '10'];
// const numbers = mixedArray.filter(item => typeof item === 'number');
// let average;
// if (numbers.length > 0) {
//     const sum = numbers.reduce((acc, num) => acc + num, 0);
//     average = sum / numbers.length;
// } else {
//     average = null;
// }
// console.log(average)

// - 6.3
function removeElement(array, item) {
    const index = array.indexOf(item);
    if (index !== -1) {
        array.splice(index, 1);
    }
}
const array = [1, 3, 4, 6, 2, 5, 7];
removeElement(array, 4);
console.log(array);