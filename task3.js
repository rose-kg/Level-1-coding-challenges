function isSixtyFive(num1, num2){
    let sum = num1 + num2;
    if (num1 === 65 || num2 === 65 || sum === 65){
        sum = true;
    }else{
        sum = false;
    }
    return sum;
}
console.log(isSixtyFive(0, 65));

module.exports = { isSixtyFive };

