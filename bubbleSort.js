function bubbleSort(arr){
    for (let i = arr.length - 1; i > 0; i--){
        let noSwaps;
        for (let j = 0; j < i; j++){
            noSwaps = true
            if (arr[j] > arr[j + 1]){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                noSwaps = false
            }
        }
        if (noSwaps) break;
    }
    return arr;
}

console.log(bubbleSort([1,5,3,4,2,13,43,66,-34]))