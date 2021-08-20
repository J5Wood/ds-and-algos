// naive fibonacci
// function fib(n){
//     if(n <= 2) return 1;
//     return fib(n-1) + fib(n-2);
// }


// Smart recursive fibonacci
// Storing data in a "memo" like an array or an obj allows us to access those results 
//  instead of having to do more calculations that repeat work we've already completed
// Can exceed callstack size with large enough number since it's recursive

// function fib(n, memo = [undefined, 1, 1]){
//     if(memo[n] !== undefined) return memo[n];
//     let value = fib(n-1, memo) + fib(n-2, memo);
//     memo[n] = value
//     return value;
// }


// Tabulated fibonacci
// Better space complexity than recursive solution
// Won't stack overflow
function fib(n){
    if(n <= 2) return 1;
    let fibNums = [0,1,1];
    for(let i = 3; i <= n; i++){
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
    }
    return fibNums[n]
}

fib(100);