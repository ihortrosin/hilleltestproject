
let str = "hello world";
const symbolsToRemove = ["l", "d"];
for (let i = 0; i <= 2; i++) {
    const char = symbolsToRemove[i];
    str = str.replaceAll(char, "");
}

console.log(str);
