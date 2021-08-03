// Never makes comparisons between elements
// Exploits the fact that size of a number is encoded into number of digits
// Create 10 buckets, one for each last number possible in a collection of base10 mums
// So, all mums that end in 3 go in bucket 3
// Then  put back into a list, keeping the order that they’re in in the buckets
// Repeat process, grouping based off of second digit from the right
// Continue putting into buckets and re forming into list, until largest number has gone through process


function radixSort(nums){
    let maxLength = mostDigits(nums)

    for (let i = 0; i < maxLength; i++){
        let bucketArray = Array.from({length: 10}, () => [])

        for (let j = 0; j < nums.length; j++){
            let digit = getDigit(nums[j], i);
            bucketArray[digit].push(nums[j]);
        }
        nums = [].concat(...bucketArray)
    }
    return nums;
}

function mostDigits(nums){
    let maxCount = 0;
    for (let i = 0; i < nums.length; i++){
        maxCount = Math.max(maxCount, digitCount(nums[i]));
    }
    return maxCount;
}

function digitCount(num){
    // Doesn't include floats? Won't return correctly for anything > -1 and < 1
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function getDigit(num, i){
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}


let nums = [3221,1,10,9680,577,9420,7,5622,4793,2030,3138, 82, 2599, 743, 4127]

console.log(radixSort(nums))

// function myRadixSort(nums){
//     //accepts list of nums
//     //Find out how many digits longest num has
  
//     // each time, create buckets for each digit, an array with bucket arrays
    
//     let maxLength = mostDigits(nums)
//     for (let i = 0; i < maxLength; i++){
//            // loop from 0 to mostDigits
//             // each time, create buckets for each digit, an array with bucket arrays

//         let bucketArray = []
//         for (let j = 0; j < nums.length; j++){
//             // find digit, either add to existing array spot, or create a new one
//             let digit = getDigit(nums[j], i);
//             !!bucketArray[digit] ? bucketArray[digit].push(nums[j]) : bucketArray[digit] = [nums[j]];
//         }
//         // stitch nums back together in an array
//         nums = []
//         for (let key in bucketArray){
//             nums.push(...bucketArray[key])
//         }

//     }
//     return nums;
// }

// function mostDigits(nums){
//     let maxCount = 0;
//     for (let i = 0; i < nums.length; i++){
//         maxCount = Math.max(maxCount, digitCount(nums[i]));
//     }
//     return maxCount;
// }

// function myDigitCount(num){
//     let counter = 0
//     let checkNum = num
//     while (checkNum >= 1){
//         counter++;
//         checkNum / 10;
//     }
//     return counter
// }

// function myGetDigit(num, place){
//     let numString = num.toString();
//     let returnNum = numString[numString.length - 1 - place];
//     return parseInt(returnNum) || 0;
// }