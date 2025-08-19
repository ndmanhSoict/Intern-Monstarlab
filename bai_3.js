function itemBoth(arr1, arr2) {
    let result = [];
    let getItem1 = new Set(arr1);
    for (x of getItem1) {
        if (arr2.includes(x)) {
            result.push(x);
        }
    }
    return result;
}

// console.log(itemBoth([1, 2, 3], [1, 2, 3, 4, 5]));
// console.log(itemBoth([10, 20, 30], [40, 50, 60]));
// console.log(itemBoth(["apple", "banana", "cherry"], ["banana", "date", "cherry"]));
// console.log(itemBoth([true, false, true], [false, false]));
// console.log(itemBoth([1, "1", true, null, undefined], ["1", false, 1, null]));