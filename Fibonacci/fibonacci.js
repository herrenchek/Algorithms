function fibonacci(nth) {
    // Iteratively.
    const nums = [0, 1];
    let i = 2;

    while (i < nth) {
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

// Recursively?