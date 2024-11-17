// - 10.1
let user = {
    name: "Ігор",
    age: 32,
    location: "Пафос",
    email: "ihor@gmail.com",


    showInfo: function() {
        console.log(`Ім'я: ${this.name}`);
        console.log(`Вік: ${this.age}`);
        console.log(`Місце проживання: ${this.location}`);
        console.log(`Email: ${this.email}`);
    }
};
user.showInfo();
