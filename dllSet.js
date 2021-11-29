class Node{
    constructor(val){
        this.val = val
        this.next = null      
        this.prev = null    
    }
}

class DoublyLinkedList{
    constructor(){
        this.length = 0
        this.head = null
        this.tail = null
    }

    set(idx, val){
        if(idx >= this.length) return false
        let half = this.length / 2
        let currentNode

        if(idx < half){
            currentNode = this.head
            while(idx > 0 ) {
                currentNode = currentNode.next
                idx--
            }
        } else {
            currentNode = this.tail
            while(idx < this.length - 1){
                currentNode = currentNode.prev
                idx++
            }
        }
        currentNode.val = val
        return true
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
}

let dll = new DoublyLinkedList

dll.push(5).push(10).push(15).push(20)
console.log(dll.set(0, 10))
console.log(dll.length)
console.log(dll.head.val)
console.log(dll.set(10, 10))
console.log(dll.set(2, 100))
console.log(dll.head.next.next.val)
console.log(dll)