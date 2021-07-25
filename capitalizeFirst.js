function capitalizeFirst(arr){
    const capitalizeString = arr => arr[0].toUpperCase() + arr.slice(1)
    
    if (arr.length === 1){
        return [capitalizeString(arr[0])]
    }
    
    return [capitalizeString(arr[0])].concat(capitalizeFirst(arr.slice(1)))
}

let arr = ['car','taco','banana']

console.log(capitalizeFirst(arr))