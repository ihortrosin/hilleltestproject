// // - 10.1
// let user = {
//     name: "Ігор",
//     age: 32,
//     location: "Пафос",
//     email: "ihor@gmail.com",
//
//
//     showInfo: function() {
//         console.log(`Ім'я: ${this.name}`);
//         console.log(`Вік: ${this.age}`);
//         console.log(`Місце проживання: ${this.location}`);
//         console.log(`Email: ${this.email}`);
//     }
// };
// user.showInfo();

// - 10.2
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});
console.log(evenNumbers);