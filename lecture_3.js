// 3.1
console.log("Тип даних Number:", typeof 32);
console.log("Тип даних String:", typeof "string");
console.log("Тип даних Boolean:", typeof true);
console.log("Тип даних Undefined:", typeof undefined);
console.log("Тип даних Null:", typeof null);
console.log("Тип даних Object:", typeof { name: "Alice", age: 25 });
console.log("Тип даних Array:", typeof [1, 2, 3]);
console.log("Тип даних Function:", typeof function() {});
console.log("Тип даних Symbol:", typeof Symbol("symbol"));
console.log("Тип даних BigInt:", typeof 123n);

// 3.2
const line1 = "рядок один";
const line2 = "рядок два";
const line3 = "рядок три";
console.log(`${line3} ${line1} ${line2}`);

// 3.3 вирішив через слайс, хоча є способи красивіши просто нема часу
let number = 25678;
let numberStr = number.toString();
let result = numberStr.slice(0, 1) + " " +
    numberStr.slice(1, 2) + " " +
    numberStr.slice(2, 3) + " " +
    numberStr.slice(3, 4) + " " +
    numberStr.slice(4, 5);
console.log(result);
