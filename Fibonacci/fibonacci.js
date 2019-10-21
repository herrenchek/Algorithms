// Iteratively.
// Big O O(n) time | O(1) space
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

console.log(fibonacci(7)); // 13
console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(5)); // 5
console.log("\n");


// Recursively.
// Big O O(2^n) time | O(n) space
const nthRecursive = nth => {
// A recursive function is a function that calls itself during its execution.
    // Base cases prevent the function from looping infinitely.
    if (nth === 0) return 0;
    if (nth === 1) return 1;
    if (nth > 1) return nthRecursive(nth - 2) + nthRecursive(nth - 1);
}

console.log(nthRecursive(7)); // 13
console.log(nthRecursive(0)); // 0
console.log(nthRecursive(1)); // 1
console.log(nthRecursive(5)); // 5
console.log("\n");

// More efficient recursion for time.
// Big O O(n) time | O(n) space
const nthFibMemo = (n, memo = { 0: 0, 1: 1}) => {
    if(n in memo) {
        return memo[n];
    }
    memo[n] = nthFibMemo(n - 2, memo) + nthFibMemo(n -1, memo);
    return memo[n];
}

console.log(nthFibMemo(7)); // 13
console.log(nthFibMemo(0)); // 0
console.log(nthFibMemo(1)); // 1
console.log(nthFibMemo(5)); // 5