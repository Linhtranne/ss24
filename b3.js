let a = parseInt(prompt("Nhập a:"));
let b = parseInt(prompt("Nhập b:"));
if (isNaN(a) || isNaN(b)) {
    console.log("Nhập sai rồi.");
} else {
    let result = 1;

    for (let i = 0; i < b; i++) {
        result *= a;
    }
    console.log(a + " mũ " + b + " là: " + result);
}