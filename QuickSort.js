const nums = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];

let iterations = 0;
/**
 * 
 * @param {number[]} arr 
 */
function quickSort(arr) {
    iterations++;
    if (!arr.length || arr.length == 1) {
        return arr;
    }
    const greaterThan = [];
    const lessThan = [];
    
    const pivot = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= pivot) {
            lessThan.push(arr[i]);
        }
        else {
            greaterThan.push(arr[i]);
        }
    }
    
    return [
        ...quickSort(lessThan),
        pivot,
        ...quickSort(greaterThan),
    ];
}

console.time('quick sort');
console.log(quickSort(nums));
console.timeEnd('quick sort');
console.log(iterations);

console.log(nums);