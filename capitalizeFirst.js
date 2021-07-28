function capitalizeFirst(arr){
    const capitalizeString = str => str[0].toUpperCase() + str.slice(1)
    
    if (arr.length === 1){
        return [capitalizeString(arr[0])]
    }
    
    return [capitalizeString(arr[0])].concat(capitalizeFirst(arr.slice(1)))
}

let arr = ['car','taco','banana']

console.log(capitalizeFirst(arr))