class Node{
    constructor(val){
        this.val = val
        this.next = null;      
    }
}

class SinglyLinkedList{
    
    constructor(val){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    push(val){
        let node = new Node(val);
        if(!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }
}

let list = new SinglyLinkedList()

console.log(list.push(13))
console.log(list.push(12))
console.log(list.push(14))
console.log(list.push(16))

console.log(list.head.val)
console.log(list.head.next.val)
console.log(list.head.next.next.val)
console.log(list.tail.val)