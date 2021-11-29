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

    findNodeByIndex(idx){
        let currentNode
        let half = Math.floor(this.length / 2)
        if(idx <= half){
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

    insert(idx, val){
        if(idx < 0 || idx > this.length) return false
        let newNode = new Node(val)

        if(this.length === 0){
            this.head = newNode
            this.tail = newNode
        } else if(idx === this.length){
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        } else {
            let positionNode = this.findNodeByIndex(idx)

            if(positionNode.prev){
                positionNode.prev.next = newNode
                newNode.prev = positionNode.prev
            } else { 
                this.head = newNode
            }
            positionNode.prev = newNode
            newNode.next = positionNode
        }
        this.length++
        return true
    }

    remove(idx) {
        if(idx < 0 || idx >= this.length) return undefined

        let currentNode = this.findNodeByIndex(idx)

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

console.log("dll:")
console.log("")
console.log(dll.insert(0, 10))
console.log(dll.insert(1, 15))
console.log(dll.insert(2, 20))
console.log(dll.insert(0, 5))
console.log(dll.insert(2, 12))
console.log(dll.insert(100, 12))
console.log(dll.length)
console.log(dll.head.val)
console.log(dll.head.next.val)
console.log(dll.head.next.next.val)
console.log(dll.head.next.next.next.val)
console.log(dll.head.next.next.next.next.val)


let dll2 = new DoublyLinkedList

console.log("")
console.log("dll2:")
console.log("")
dll2.push(5).push(10).push(15).push(20)
console.log(dll2.remove(2).val)
console.log(dll2.remove(100))
console.log(dll2.length)
console.log(dll2.head.val)
console.log(dll2.head.next.val)
console.log(dll2.head.next.next.val)
console.log(dll2.tail.val)
console.log(dll2.tail.prev.val)
console.log(dll2.tail.prev.prev.val)
console.log(dll2.tail.prev.prev.prev)

console.log(dll2.remove(0))
console.log(dll2.head)
console.log(dll2.remove(1))
console.log(dll2.head)
console.log(dll2.tail)
console.log(dll2.remove(0))
console.log(dll2.head)