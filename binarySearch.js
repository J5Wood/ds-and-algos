function binarySearch(arr, val) {
    let leftPoint = -1;
    let rightPoint = arr.length;

    while (leftPoint <= rightPoint){
        let midPoint = Math.floor((rightPoint + leftPoint) / 2);
        if (arr[midPoint] === val){
            return midPoint;
        }
        if (val < arr[midPoint]){
            rightPoint = midPoint -1;
        } else {
            leftPoint = midPoint + 1;
        }
    }
    return -1;
}

console.log(binarySearch([1,3,4,6,8,9,12,14,16,23,25,26,27,28,34,45,56,57,58,59,60], 23));


