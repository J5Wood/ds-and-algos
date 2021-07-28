function collectStrings(obj){
    let returnArr = []

    for (let key in obj) {
        if (typeof(obj[key]) === "object"){
            returnArr = returnArr.concat(collectStrings(obj[key]));
        } else if (typeof(obj[key] === "string")){
            returnArr.push(obj[key]);
        }
    }
    return returnArr;
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj))