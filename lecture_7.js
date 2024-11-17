// - 7.1
// function sum() {
//     let total = 0;
//     return function (num) {
//         total = total + num;
//         return total;
//     };
// }
// const add = sum();
// console.log(add(4));
// console.log(add(6));
// console.log(add(10));
// console.log(add(7));

// - 7.2
function name(a) {
    return function(b) {
        return a * b;
    };
}
console.log(name(6)(9));
