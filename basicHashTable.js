class HashTable{
    constructor(size = 53){
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for( let i = 0; i < Math.min(key.length, 100); i++){
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total + WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value){
        let keyIndex = this._hash(key);
        if(!this.keyMap[keyIndex]) this.keyMap[keyIndex] = [];
        this.keyMap[keyIndex].push([key, value])
    }

    get(key){
        let keyIndex = this._hash(key)
        let indexArr = this.keyMap[keyIndex]
        if(indexArr){
            for( let i = 0; i < indexArr.length;i++){
                if(indexArr[i][0] === key){
                    return indexArr[i][1];
                }
            }
        }
        return undefined;
    }

    keys(){
        let returnArr = []
        for(let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0; j < this.keyMap[i].length; j++){
                    returnArr.push(this.keyMap[i][j][0])
                }
            }
        }
        return returnArr;
    }


    values(){
        let returnArr = []
        for(let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0; j < this.keyMap[i].length; j++){
                    if(!returnArr.includes(this.keyMap[i][j][1])){
                        returnArr.push(this.keyMap[i][j][1])
                    }
                }
            }
        }
        return returnArr;
    }
}


let hashTable = new HashTable()

hashTable.set("hello world", "hiyo")
hashTable.set("goodbye world", "byeo")
hashTable.set("whats good", "sup")
hashTable.set("what the heck", "bruh")
hashTable.set("chehoo", "bruddah")

console.log(hashTable.keys())
console.log(hashTable.values())