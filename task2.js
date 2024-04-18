function hasThree(num1, num2) {
    let sum = 0;
    sum = num1 + num2;
    if (num1 === 3 || num2 === 3 && sum.toString().includes('3')) {
        return true;
    } else {
        return false;
    }
}
console.log(hasThree(10, 3));

module.exports = { hasThree};


