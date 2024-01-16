let n = parseInt(prompt("Nhập số nguyên dương n: "));

if (!isNaN(n) && n > 0) {
    let count = 0;
    let numberToCheck = 2;

    while (count < n) {
        let isPrime = true;

        if (numberToCheck < 2) {
            isPrime = false;
        } else {
            for (let i = 2; i <= Math.sqrt(numberToCheck); i++) {
                if (numberToCheck % i === 0) {
                    isPrime = false;
                    break;
                }
            }
        }

        if (isPrime) {
            console.log(numberToCheck);
            count++;
        }

        numberToCheck++;
    }
} else {
    console.log("Vui lòng nhập vào một số nguyên dương.");
}

