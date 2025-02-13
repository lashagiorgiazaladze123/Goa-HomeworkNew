function sumTwoLargest(arr) {
    let max1 = Math.max(...arr);
    arr.splice(arr.indexOf(max1), 1);
    let max2 = Math.max(...arr);
    
    console.log(max1 + max2);
}

let arr = [18, 12, 40, 1, 19];
sumTwoLargest(arr);
