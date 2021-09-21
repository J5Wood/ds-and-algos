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
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
            this.length++;
        
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        this.length--;
        if(this.head === this.tail) {
            let node = this.head;
            this.head = null;
            this.tail = null;
            return node;
        }
        let leftPointer = this.head;
        let rightPointer = this.head.next;
        while(rightPointer !== this.tail){
            leftPointer = leftPointer.next;
            rightPointer = rightPointer.next;
        }
        this.tail = leftPointer;
        return rightPointer;
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

console.log(list.pop())
console.log(list.pop())
console.log(list.pop())
console.log(list.pop())