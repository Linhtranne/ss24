let n = parseInt(prompt("nhập n:"));
if (isNaN(n) || n <= 0) {
    console.log("Nhập sai rồi.");
} else {
    let reNumber = 0;
    let oNumber = n;

    while (oNumber > 0) {
        reNumber = reNumber * 10 + oNumber % 10;
        oNumber = Math.floor(oNumber / 10);
    }
    console.log("Số đảo ngược của " + n + " là: " + reNumber);
}