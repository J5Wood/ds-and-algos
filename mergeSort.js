function myMergeSort(arr) {

    if (arr.length <= 1){
        return arr;
    }

    let arr2 = myMergeSort(arr.splice(0, Math.floor(arr.length / 2)))
    let arr1 =  myMergeSort(arr)

    return sortArrays(arr1, arr2)

    function sortArrays(arrOne, arrTwo){
        let returnArr = [];
        indexOne= 0;
        indexTwo= 0;

        for (let i = 0; i < arrOne.length + arrTwo.length; i++){
            if (!arrTwo[indexTwo] || arrOne[indexOne] < arrTwo[indexTwo]) {
                returnArr.push(arrOne[indexOne]);
                indexOne++;
            } else {
                returnArr.push(arrTwo[indexTwo]);
                indexTwo++;
            }
        }
        return returnArr;
    }
}




function mergeSort(arr) {

    if (arr.length <= 1){
        return arr;
    }

    let mid = Math.floor(arr.length / 2)
    let arr1 = mergeSort(arr.slice(0, mid))
    let arr2 = mergeSort(arr.slice(mid))

    return sortArrays(arr1, arr2)

    function sortArrays(arrOne, arrTwo){
        let returnArr = [];
        indexOne= 0;
        indexTwo= 0;

        while (indexOne < arrOne.length && indexTwo < arrTwo.length){
            if(arrTwo[indexTwo] > arrOne[indexOne]){
                returnArr.push(arrOne[indexOne]);
                indexOne++;
            } else {
                returnArr.push(arrTwo[indexTwo]);
                indexTwo++;
            }
        }
        while (indexOne < arrOne.length){
            returnArr.push(arrOne[indexOne])
            indexOne++;
        }
        while (indexTwo < arrTwo.length){
            returnArr.push(arrTwo[indexTwo])
            indexTwo++;
        }
        return returnArr;
    }
}

let arr = [1,23,24,56,100,21,23,47,72,82,99,45,234,245,54,45,345,34,534,534,655,465,56,567,657,657,5675,75,74,63,63,563576,575,7]


console.log(mergeSort(arr), myMergeSort(arr))