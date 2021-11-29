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
        if(this.length === 0) return undefined
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
            let positionNode = this.get(idx)

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

        let currentNode = this.get(idx)

        currentNode.prev ? currentNode.prev.next = currentNode.next : this.head = currentNode.next
        currentNode.next ? currentNode.next.prev = currentNode.prev : this.tail = currentNode.prev
        currentNode.prev = null
        currentNode.next = null
        this.length--
        return currentNode
    }

    get(idx){
        if(idx < 0 || idx >= this.length) return undefined
        let half = Math.floor(this.length / 2)
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

    set(idx, val){
        let currentNode = this.get(idx)
        currentNode.val = val
        return true
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

            leftNode.prev.next = leftNode
            rightNode.next.prev = rightNode

            if(this.head === leftNode){
                this.head = rightNode
                rightNode.prev = null
                this.tail = leftNode
                leftNode.next = null
            } else {
                rightNode.prev = leftPrev
                leftNode.next = rightNext
                rightNext.prev = leftNode
                leftPrev.next = rightNode
            }
            [leftNode, rightNode] = [rightNode.next, leftNode.prev]

            leftCounter++
            rightCounter--
        }
        return this
    }
}

let dll = new DoublyLinkedList

console.log(dll.insert(0,10))
console.log(dll.insert(1,15))
console.log(dll.insert(2,20))
console.log(dll.insert(0,5))

console.log(dll.push(25))
console.log(dll.push(30))
console.log(dll.pop())

console.log(dll.unshift(4))
console.log(dll.unshift(3))
console.log(dll.unshift(2))
console.log(dll.shift())

console.log(dll.get(6))
console.log(dll.insert(4, 12))
console.log(dll.insert(6, 18))
console.log(dll.remove(5))
console.log(dll.set(5, 15))

console.log(dll.reverse())