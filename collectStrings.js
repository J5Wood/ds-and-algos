function collectStrings(obj){
    let returnArr = []

    function checkForString(obj) {
        for (let key in obj) {
            if (typeof(obj[key]) === "object"){
                checkForString(obj[key]);
            } else if (typeof(obj[key] === "string")){
                returnArr.push(obj[key]);
            }
        }
    }

    checkForString(obj)

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