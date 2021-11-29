class Node{
    constructor(val){
        this.val = val
        this.next = null;      
        this.prev = null;      
    }
}

class DoublyLinkedList{
    constructor(){
        this.length = 0
        this.head = null
        this.tail = null
    }

    unshift(val){
        let newNode = new Node(val)
        if(this.length === 0){
            this.head = newNode
            this.tail = newNode
        } else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length++;
        return this
    }

    shift(){
        if(this.length === 0) return undefined
        let returnNode = this.head
        if(this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = returnNode.next
            this.head.prev = null
        }
        returnNode.next = null
        this.length--
        return returnNode
    }

    push(val){
        let newNode = new Node(val)

        if(this.length === 0){
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.prev = this.tail
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop(){
        if(this.length === 0) return null
        let returnNode = this.tail
        if(this.length === 1){
            this.head = null
            this.tail = null
        } else {
            this.tail = this.tail.prev
            this.tail.next = null
            returnNode.prev = null
        }
        this.length--
        return returnNode
    }
}


let doublyLinkedList = new DoublyLinkedList

console.log(doublyLinkedList.unshift(5))
console.log(doublyLinkedList.length)
console.log(doublyLinkedList.head.val)
console.log(doublyLinkedList.tail.val)
console.log(doublyLinkedList.unshift(10))
console.log(doublyLinkedList.length)
console.log(doublyLinkedList.head.val)
console.log(doublyLinkedList.head.next.val)
console.log(doublyLinkedList.tail.val)
console.log(doublyLinkedList.unshift(15))
console.log(doublyLinkedList.length)
console.log(doublyLinkedList.head.val)
console.log(doublyLinkedList.tail.val)
console.log(doublyLinkedList.head.next.val)
console.log(doublyLinkedList.head.next.next.val)
console.log(doublyLinkedList.head.next.next.prev.prev.val)

console.log("unshifting:")

console.log(doublyLinkedList.shift().val)
console.log(doublyLinkedList.length)
console.log(doublyLinkedList.shift().val)
console.log(doublyLinkedList.length)
console.log(doublyLinkedList.shift().val)
console.log(doublyLinkedList.length)
console.log(doublyLinkedList.shift())
console.log(doublyLinkedList.length)