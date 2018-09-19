const nums = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];

let iterations = 0;
let subIterations = 0;

let swapped = false;
let lastUnsortedIndex = nums.length;
console.time('bubble sort');
do {
    swapped = false;
    
    iterations++;
    
    for (let index = 0; index < lastUnsortedIndex - 1; index++) {
        subIterations++;
        if (nums[index] > nums[index + 1]) {
            // nums.splice(index, 2, nums[index + 1], nums[index]);
            
            const temp = nums[index];
            nums[index] = nums[index + 1];
            nums[index + 1] = temp;
            
            swapped = true;
            
            console.log(nums);
        }
    }
    
    lastUnsortedIndex--
}
while (swapped);
console.timeEnd('bubble sort');

console.log(iterations);
console.log(subIterations);

console.log(nums);