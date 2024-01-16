let numRows =+ parseInt(prompt("Nhập vào số nguyên dương:"));
if (numRows > 0) {
    let i = 1;
    while (i <= numRows) {
        let j = 1;
        while (j <= i) {
            document.write("*");
            j++;
        }
        document.write("<br>");
        i++;
    }
    i = numRows;
    while (i >= 1) {
        var j = 1;
        while (j <= i) {
            document.write("*");
            j++;
        }
        document.write("<br>");
        i--;
    }
} else {
    document.write("Vui lòng nhập một số nguyên dương lớn hơn 0.");
}