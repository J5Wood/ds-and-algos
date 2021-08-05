
function quickSort(arr, left = 0, right = arr.length - 1){

    //if array length is 1 or less
    if(left < right){

        //pivot moves "pivot" value to correct place, returns index to split remainder for recursion
        let pivotIdx = pivot(arr, left, right)


        quickSort(arr, left, pivotIdx - 1);
        quickSort(arr, pivotIdx + 1, right);
    }
    return arr;

    function pivot(arr, start = 0, end = arr.length - 1){
        // first time through will address whole array, 
        // then only section of array you specify with start and end
        let pivot = arr[start];
        let swapIdx = start;

        // making pivot start of array every time, doesn't necessarily have to
        for (let i = start + 1; i <= end; i++){

            // if current point in array is smaller: 
            // increment swap index and move small value to it
            if(pivot > arr[i]){
                swapIdx++
                [arr[i], arr[swapIdx]] = [arr[swapIdx], arr[i]]
            }
        }
        // after small values are all at beginning of arr,
        // move pivot num to correct place in arr
        [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]]
        
        // return correctly placed index for recursion on remaining values
        return swapIdx
    }

}



function myQuickSort(arr){
    if (arr.length <= 1){
        return arr;
    }

    let pivot = arr[0];
    let smallerIndex = 1;
    for (let i = 1; i < arr.length; i++){
        if (arr[i] < pivot){
            [arr[i], arr[smallerIndex]] = [arr[smallerIndex], arr[i]];
            smallerIndex++;
        }
    }
    if (smallerIndex > 1){
        [arr[0], arr[smallerIndex - 1]] = [arr[smallerIndex - 1], arr[0]]
    }

    let leftSide = myQuickSort(arr.slice(0, smallerIndex - 1))
    let rightSide = myQuickSort(arr.slice(smallerIndex))
    return [...leftSide, pivot, ...rightSide]
}


let arr = [11,40,40,50,43,10,30,42,20,6,19,32,20,41,23,27];
console.log(myQuickSort(arr), quickSort(arr));
