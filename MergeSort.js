const nums = [
    3, 
    44, 
    38, 
    5, 
    47, 
    15, 
    36, 
    26, 
    27, 
    2, 
    46, 
    4, 
    19, 
    50, 
    48,
];
const nums2 = nums.map(n => ({ id: n }));

const partitions = nums.map((n, i) => createPartition(i, 1));

function createPartition(index, length) {
    return {
        index,
        length,
    };
}

let iterations = 0;

console.time('merge sort');
while (partitions.length > 1) {
    iterations++;
    for (let i = 0; i < partitions.length - 1; i++) {
        const partitionA = partitions[i];
        const partitionB = partitions[i + 1];
        
        // console.log(partitionA);
        // console.log(partitionB);
        
        const sortedSection = mergeSort(
            nums.slice(partitionA.index, partitionA.index + partitionA.length),
            nums.slice(partitionB.index, partitionB.index + partitionB.length),
        );
        
        // console.log(sortedSection);
        
        nums.splice(partitionA.index, sortedSection.length, ...sortedSection);
        
        partitionA.length = sortedSection.length;
        partitions.splice(i + 1, 1);
    }
    
    function mergeSort(partitionA, partitionB) {
        const nextPartition = [];
        
        while (partitionA.length || partitionB.length) {
            const [ a ] = partitionA;
            const [ b ] = partitionB;
            
            if (typeof b == 'undefined' || a < b) {
                nextPartition.push(a);
                partitionA.shift();
            }
            else {
                nextPartition.push(b);
                partitionB.shift();
            }
        }
        
        return nextPartition;
    }
}
console.timeEnd('merge sort');

// array.prototype.sort() using a custom comparison function
console.time('prototype sort');
nums2.sort((a, b) => a.id - b.id); // -1: a goes first; 0: they are the same; 1: b goes first
console.timeEnd('prototype sort');

console.log(iterations);
console.log(nums);