function countItemAppear(array) {
    let result = {};
    let getItem = new Set(array);
    // console.log(Cacphantu);
    for (x of getItem) {
        let count = array.filter(y => y == x);
        result[`${x}`] = count.length;
    }
    // console.log(result)
    return result;
}

// console.log(countItemAppear([1, 2, 3, 4, 'an com', 'di lam', 5, 6, 7, 'an com', 8, 9, 10, 5, 6, 8, 7, 4, 6, 'an com',1,1,1,1,]))