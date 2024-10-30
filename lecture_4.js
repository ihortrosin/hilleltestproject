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

//-- 4.3 Portrait

// -- birth year
const birthYear = prompt("Введіть свій рік народження:");
let birthYearMessage;
if (birthYear === null || birthYear === '') {
    birthYearMessage = "Шкода, що Ви не захотіли ввести свій рік народження.";
} else {
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    birthYearMessage = `Ваш вік: ${age} років.`;
}

// -- city
const city = prompt("В якому місті ви живете?");
let cityMessage;
if (city === null || city === '') {
    cityMessage = "Шкода, що Ви не захотіли ввести своє місто.";
} else {
    switch (city.toLowerCase()) {
        case "київ":
            cityMessage = "Ти живеш у столиці України.";
            break;
        case "вашингтон":
            cityMessage = "Ти живеш у столиці США.";
            break;
        case "лондон":
            cityMessage = "Ти живеш у столиці Великобританії.";
            break;
        default:
            cityMessage = `Ти живеш у місті ${city}.`;
            break;
    }
}

// -- sport
const sport = prompt("Ваш улюблений вид спорту?");
let sportMessage;
if (sport === null || sport === '') {
    sportMessage = "Шкода, що Ви не захотіли ввести свій улюблений вид спорту.";
} else {
    switch (sport.toLowerCase()) {
        case "футбол":
            sportMessage = "Круто! Хочеш стати як Ліонель Мессі?";
            break;
        case "баскетбол":
            sportMessage = "Круто! Хочеш стати як Лєброн Джеймс?";
            break;
        case "кіберспорт":
            sportMessage = "Круто! Хочеш стати як Сімпл?";
            break;
        default:
            sportMessage = `Твій улюблений вид спорту - ${sport}.`;
            break;
    }
}

alert(`${birthYearMessage}\n${cityMessage}\n${sportMessage}`);

