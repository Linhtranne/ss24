let n = parseInt(prompt("Nhập số nguyên dương n:"));
if (isNaN(n) || n <= 0) {
    console.log("Vui lòng nhập vào một số nguyên dương hợp lệ.");
} else {
    let sum = 1;

    for (let i = 2; i <= n; i++) {
        sum += 1 / Math.pow(i, 3);
    }
    sum = Math.round(sum * 1e5) / 1e5;
    console.log("Kết quả của biểu thức S là: " + sum);
}