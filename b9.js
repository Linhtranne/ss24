let a = parseInt(prompt("Nhập số nguyên a: "));
let b = parseInt(prompt("Nhập số nguyên b: "));
let c = parseInt(prompt("Nhập số nguyên c: "));
let d = parseInt(prompt("Nhập số nguyên d: "));

let gcdAB, gcdCD;
while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
}
gcdAB = a;
while (d !== 0) {
    let temp = d;
    d = c % d;
    c = temp;
}
gcdCD = c;
while (gcdCD !== 0) {
    let temp = gcdCD;
    gcdCD = gcdAB % gcdCD;
    gcdAB = temp;
}

let result = gcdAB;

console.log("Ước chung lớn nhất của", a, b, c, "và", d, "là:", result);
