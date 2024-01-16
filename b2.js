let a = parseInt(prompt("Nhập a"));
let b = parseInt(prompt("Nhập b"));
if (isNaN(a) || a <= 0 , isNaN(b) || b <= 0) {
    console.log("Nhập sai rồi.");
} else {
    console.log("tổng các số nguyên trong khoảng giữa hai số " + a + "và " + b + "là");

    if (a > b) {
        let temp = a;
        a = b;
        b = temp;
    }

    for (let i = a; i <= b; i++) {
        sum += i;
    }

}