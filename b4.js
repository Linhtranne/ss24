let n = parseInt(prompt("Nhập n:"));
if (isNaN(n) || n <= 0) {
    console.log("Nhập sai rồi.");
} else {
    console.log("Bình phương của các số nguyên dương chẵn từ 1 sao cho tổng nhỏ hơn " + n + ":");
    let sum = 0;
    let i = 2;
    while ((i * i + sum) < n) {
        let square = i * i;
        sum += square;
        console.log(square);
        i += 2;
    }
}