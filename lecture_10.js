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
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenNumbers = numbers.filter(function(num) {
//     return num % 2 === 0;
// });
// console.log(evenNumbers);

// - 10.3
let contactBook = {

    contacts: [
        { name: "Іван", phone: "123-456-789", email: "ivan@gmail.com" },
        { name: "Олена", phone: "987-654-321", email: "olena@gmail.com" }
    ],

    findContact: function(name) {
        let contact = this.contacts.find(contact => contact.name === name);
        return contact || "Контакт не знайдено"; // Повертаємо контакт або повідомлення
    },
    addContact: function(name, phone, email) {
        this.contacts.push({ name, phone, email });
        console.log("Контакт додано");
    }
};
contactBook.addContact("Ігор", "975-93-55-69", "ihor@gmail.com");
console.log(contactBook.findContact("Олена")); // Знайдений контакт
console.log(contactBook.findContact("Ігор")); // Знайдено доданий контакт
console.log(contactBook.findContact("Михайло")); // не знайдено
