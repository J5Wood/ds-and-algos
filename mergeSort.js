function mergeSort(arr) {


    //split array into pieces 0 - 1 long
    



    function sortArrays(arrOne, arrTwo){
        let returnArr = [];
        indexOne= 0;
        indexTwo= 0;

        for (let i = 0; i < arrOne.length + arrTwo.length; i++){
            if ( !arrTwo[indexTwo] || arrOne[indexOne] < arrTwo[indexTwo]) {
                returnArr[i] = arrOne[indexOne];
                indexOne++;
            } else {
                returnArr[i] = arrTwo[indexTwo];
                indexTwo++;
            }
        }
        return returnArr;
    }

    console.log(sortArrays(arr.splice(arr.length / 2), arr))
}

console.log(mergeSort([1,23,24,56,100,21,23,47,72,82,99]))