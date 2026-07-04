//  Write a JavaScript function that returns array elements larger than a number.
function largerElements(arr, num) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            result.push(arr[i]);
        }
    }

    return result;
}

let arr = [10, 25, 8, 40, 15];

console.log(largerElements(arr, 20));