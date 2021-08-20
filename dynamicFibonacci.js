// naive fibonacci
// function fib(n){
//     if(n <= 2) return 1;
//     return fib(n-1) + fib(n-2);
// }


// Smart fibonacci
// Storing data in a "memo" like an array or an obj allows us to access those results 
//  instead of having to do more calculations that repeat work we've already completed
function fib(n, memo = [undefined, 1, 1]){
    if(memo[n] !== undefined) return memo[n];
    let value = fib(n-1, memo) + fib(n-2, memo);
    memo[n] = value
    return value;
}


fib(100);