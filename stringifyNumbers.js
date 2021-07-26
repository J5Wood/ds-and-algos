function stringifyNumbers(obj){
    let returnObj = {...obj};

    let modifyObj = (newObj) => {
        for (let key in newObj){
            if(typeof(newObj[key]) === "object"){
                if (Array.isArray(newObj[key])){
                    newObj[key] = modifyObj([...newObj[key]]);
                } else {
                    newObj[key] = modifyObj({...newObj[key]});
                }
            }
            if(typeof(newObj[key]) === "number"){
                newObj[key] = newObj[key].toString();
            }
        }
        return newObj;
    }
    return modifyObj(returnObj);
}

let obj = {
    num: 1,
    test: [5, true],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log(stringifyNumbers(obj))
console.log(obj)