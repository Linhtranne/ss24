let n = parseInt(prompt("Nhập số nguyên dương n:"));
if (isNaN(n) || n <= 0) {
    console.log("Nhập sai rồi.");
} else {
    console.log("Bình phương của các số nguyên dương chẵn từ 1 đến " + n + ":");

    for (let i = 2; i <= n; i += 2) {
        let square = i * i;
        console.log(square);
    }
}