// // - 7.1
// // function sum() {
// //     let total = 0;
// //     return function (num) {
// //         total = total + num;
// //         return total;
// //     };
// // }
// // const add = sum();
// // console.log(add(4));
// // console.log(add(6));
// // console.log(add(10));
// // console.log(add(7));
//
// // // - 7.2
// // function name(a) {
// //     return function(b) {
// //         return a * b;
// //     };
// // }
// // console.log(name(6)(9));
//
// // - 7.3
// function putNumber() {
//     let attempts = 0;
//     let userInput;
//     while (attempts < 10) {
//         userInput = prompt("Введіть число більше за 100:");
//         if (userInput !== null && Number(userInput) > 100) {
//             console.log("Ви ввели число більше за 100: " + userInput);
//             return;
//         } else if (userInput === null) {
//             console.log("Завершення");
//             return;
//         }
//         attempts++;
//
//         if (Number(userInput) <= 100) {
//             alert("Введіть число більше за 100");
//         }
//     }
//     alert("Кількість спроб вичерпано, спробуйте ще раз пізніше.");
// }
// putNumber();
