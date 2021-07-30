function selectionSort(arr){
    for ( let i = 0; i < arr.length; i++){
        let minVal = i;
        for ( let j = i + 1; j < arr.length; j++){
            if (arr[j] < arr[minVal]) minVal = j;
        }
        if (i !== minVal) [arr[i], arr[minVal]] = [arr[minVal], arr[i]];
    }
    return arr;
}

console.log(selectionSort([12,3,45,5,57,35,5,74,87,4,2,45]))