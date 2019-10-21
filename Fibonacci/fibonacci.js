// Iteratively.
function fibonacci(nth) {
    const nums = [0, 1];
    let i = 2;

    while (i <= nth) {
        const sum = nums[0] + nums[1];
        nums[0] = nums[1];
        nums[1] = sum; 
        i++;
    }

    return nth >= 1 ? nums[1] : nums[0];
}

console.log(fibonacci(7)); // 8
console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(5)); // 3
console.log("\n");


// Recursively.
const nthRecursive = nth => {
// A recursive function is a function that calls itself during its execution.
    // Base cases that prevent the function from looping infinitely.
    if (nth === 0) return 0;
    if (nth === 1) return 1;
    if (nth > 1) return nthRecursive(nth - 2) + nthRecursive(nth - 1);
}

console.log(nthRecursive(7)); // 8
console.log(nthRecursive(0)); // 0
console.log(nthRecursive(1)); // 1
console.log(nthRecursive(5)); // 3