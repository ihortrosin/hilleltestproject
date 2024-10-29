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
function numberVerification() {
    const numberStr = prompt("Введіть тризначне число");
    //const number = 222;
    //let numberStr = number.toString();
    let x = numberStr.slice(0, 1);
    console.log(x);
    let y = numberStr.slice(1, 2);
    console.log(y);
    let z = numberStr.slice(2, 3);
    console.log(z);

    if (x === y && y === z) {
        alert("числа однакові");
    }  else if (x === y || y === z || x === z) {
        alert("є два однакових числа");
    } else {
        alert("числа не однакові");
    }
}
numberVerification();


