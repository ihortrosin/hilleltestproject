// - 7.1
function name(a) {
    return function(b) {
        return a * b;
    };
}
console.log(name(6)(9));
