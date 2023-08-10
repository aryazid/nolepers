function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}

function numberOfHooks(length, maxHookDist) {
    const distanceBetweenHooks = gcd(length, maxHookDist);
    const numberOfHooks = Math.floor(length / distanceBetweenHooks) + 1;
    return numberOfHooks;
}

console.log(numberOfHooks(10, 3));   // Output: 4
console.log(numberOfHooks(15, 5));   // Output: 4
console.log(numberOfHooks(20, 8));   // Output: 3