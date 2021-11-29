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

    get(idx){
        if(idx >= this.length) return null
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
console.log(dll.get(0).val)
console.log(dll.get(1).val)
console.log(dll.get(2).val)
console.log(dll.get(3).val)
console.log(dll.get(4))

console.log(dll.head)
console.log(dll.tail)
console.log(dll.length)