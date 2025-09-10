function itemBoth(arr1, arr2) {
    let result = [];
    let getItem1 = new Set(arr1);
    let getItem2 = new Set(arr2);
    for (x of getItem1) {
        if (typeof x == 'object') {
            outerLoop:
            for (y of getItem2) {
                if (typeof y != 'object') continue;
                else {
                    for (key in x) {
                        if (x[key] !== y[key]) {
                            continue outerLoop;
                        }
                    }
                    result.push(x);
                }
            }
        }
        else if (arr2.includes(x)) {
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


// const arr1 = [1, 7, 2, { id: 1, name: "A" }, { id: 2, name: "B" }, 3];
// const arr2 = [2, 3, { id: 1, name: "A" }, { id: 3, name: "C" }, { id: 2, name: "B" }, 5, 7];
// console.log(itemBoth(arr1, arr2));

// const arr11 = [1, "a", true, { id: 1 }, { id: 2 }];
// const arr22 = [2, "a", false, { id: 1 }, { id: 3 }];
// console.log(itemBoth(arr11, arr22));
// itemBoth(arr11, arr22);