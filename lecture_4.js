/*
function calculateBirthYear() {
    let currentYear = prompt("Який зараз рік?");
    let age = prompt("Скільки вам років");
    let birthYear = currentYear - age;
    alert("ваш рік народження" + birthYear)
}
calculateBirthYear();

 function helloCustomerName() {
     let customerName = prompt ("Введіть ваше імʼя");
    alert("Hello," + customerName + "! How are you?");

 }
helloCustomerName();
 */
// -- 4.1
// function numberVerification() {
//     const numberStr = prompt("Введіть тризначне число");
//     //const number = 222;
//     //let numberStr = number.toString();
//     let x = numberStr.slice(0, 1);
//     console.log(x);
//     let y = numberStr.slice(1, 2);
//     console.log(y);
//     let z = numberStr.slice(2, 3);
//     console.log(z);
//
//     if (x === y && y === z) {
//         alert("числа однакові");
//     }  else if (x === y || y === z || x === z) {
//         alert("є два однакових числа");
//     } else {
//         alert("числа не однакові");
//     }
// }
// numberVerification();

// -- 4.4


 let numOrStr = prompt('input number or string');
// let numOrStr = "фівфів";

console.log(numOrStr)



// if (numOrStr === null) {
//     console.log('ви скасували')
// } else if (numOrStr.trim() === '') {
//     console.log('Empty String');
// } else if (isNaN(+numOrStr)) {
//     console.log(' number is Ba_NaN')
// } else {
// //     console.log('OK!')
// }

switch (true) {
    case (numOrStr === null):
        console.log('ви скасували');
        break;
    case (numOrStr.trim() === ''):
        console.log('Empty String');
        break;
    case (isNaN(+numOrStr)):
        console.log('number is Ba_NaN');
        break;
    default:
        console.log('OK!');
        break;
}


