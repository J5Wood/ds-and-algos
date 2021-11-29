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

    reverse(){
        let leftNode = this.head
        let rightNode = this.tail
        let leftCounter = 0
        let rightCounter = this.length - 1
        let leftPrev, rightNext

        while(leftCounter < rightCounter){

            if(leftNode.prev) {
                leftPrev = leftNode.prev
                rightNext = rightNode.next
            }

            rightNode.prev === leftNode ? leftNode.prev = rightNode : leftNode.prev = rightNode.prev
            leftNode.next === rightNode ? rightNode.next = leftNode : rightNode.next = leftNode.next

            if(leftPrev){
                rightNode.prev = leftPrev
                leftNode.next = rightNext
                rightNext.prev = leftNode
                leftPrev.next = rightNode
            } else {
                rightNode.prev = null
                leftNode.next = null

                leftNode.prev.next = leftNode
                rightNode.next.prev = rightNode

                this.head = rightNode
                this.tail = leftNode
            }
            [leftNode, rightNode] = [rightNode.next, leftNode.prev]

            leftCounter++
            rightCounter--
        }
        return this
    }
    
}

let dll = new DoublyLinkedList

dll.push(5).push(10).push(15).push(20)
console.log(dll.reverse())
console.log(dll.length)

console.log("Head down:")
console.log("")

console.log(dll.head.val)
console.log(dll.head.next.val)
console.log(dll.head.next.next.val)
console.log(dll.head.next.next.next.val)
console.log(dll.head.next.next.next.next)

console.log("")
console.log("Tail up:")
console.log("")
console.log(dll.tail.val)
console.log(dll.tail.prev.val)
console.log(dll.tail.prev.prev.val)
console.log(dll.tail.prev.prev.prev.val)
console.log(dll.tail.prev.prev.prev.prev)