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

    remove(idx) {
        if(idx >= this.length) return undefined
        let half = this.length / 2
        let currentNode

        if(idx < half){
            currentNode = this.head
            while(idx > 0){
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
        currentNode.prev ? currentNode.prev.next = currentNode.next : this.head = currentNode.next
        currentNode.next ? currentNode.next.prev = currentNode.prev : this.tail = currentNode.prev
        currentNode.prev = null
        currentNode.next = null
        this.length--
        return currentNode
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
console.log(dll.remove(2).val)
console.log(dll.remove(100))
console.log(dll.length)
console.log(dll.head.val)
console.log(dll.head.next.val)
console.log(dll.head.next.next.val)
console.log(dll.tail.val)
console.log(dll.tail.prev.val)
console.log(dll.tail.prev.prev.val)
console.log(dll.tail.prev.prev.prev)

console.log(dll.remove(0))
console.log(dll.head)
console.log(dll.remove(1))
console.log(dll.head)
console.log(dll.tail)
console.log(dll.remove(0))
console.log(dll.head)