let numberToCheck = parseInt(prompt("Nhập một số bất kỳ: "));
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
    console.log(numberToCheck + " là số nguyên tố.");
} else {
    console.log(numberToCheck + " không phải là số nguyên tố.");
}
