//
// let number = prompt("Enter a number");
// //let number = -654;
// if (number < 0) {
//   result = -1;
//  else if (number > 0) {
//    result = 1;
//  } else {
//     result = 0;
// }
//
//  let result = (number < 0) ? -1 : (number >0) ? 1 : 0;
//
// console.log(result);
//
// const a = 1;
// const b = 2;
//
// function pow(x, n) {
//
//     let result = 1;
//
//     for (let i = 0; i < n; i++) {
//
//         result *= x;
//
//     }
//
//     return console.log(result);
//
//
// -- Portrait


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
