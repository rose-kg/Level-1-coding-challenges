function combine(arr1, arr2) {
    let combinedArr = [];
    for (let i = 0; i < arr1.length || i < arr2.length; i++) {
        if (i < arr1.length) {
            combinedArr.push(arr1[i]);
        }
        if (i < arr2.length) {
            combinedArr.push(arr2[i]);
        }
    }
    return combinedArr;
}

console.log(combine([11, 22, 33, 45], [1, 2, 3]));

module.exports = { combine };

