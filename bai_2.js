function isSortNumberArray(array) {
    let length = array.length;
    for (let i = 1; i < length - 1; i++) {
        if (array[i] < array[i - 1]) {
            return false;
        }
    }
    return true;
}

// console.log(isSortNumberArray([42, 7, 19, 73, 5, 88, 21, 36, 14, 60]));
// console.log(isSortNumberArray([1, 2, 3, 4, 5, 6, 7, 8, 9]))