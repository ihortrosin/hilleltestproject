// // -- i+0.5 cycle
// for (let i = 20; i < 30.5; i+=0.5) {
//     console.log(i);
// }

// -- currency exchange rate cycle

// for (let dollars = 10; dollars <= 100; dollars += 10) {
//     let hryvnias = (dollars * 26);
//     console.log(`${dollars} ${hryvnias}`);
// }

// -- 5.3 Numbers search
// // const N = 99;
// const N = parseInt(prompt("введіть ціле число"))
// for (let i = 1; i <= 100; i++) {
//     if (N < i * i)
//     break;
//     console.log(i);
// }

// -- 5.4
const number = parseInt(prompt("введіть ціле число"));
let isPrime = true;
for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        isPrime = false;
        break;
    }
}
console.log(isPrime ? `${number} — просте число` : `${number} — не просте число`);