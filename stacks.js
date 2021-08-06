class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

// Named push and pop, even though it's inserting and removing from beginning, because it's a linked list and not an array

    push(val){
        let newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }
        this.size++;
        return this
    }

    pop(){
        if(!this.first) return null;
        let returnNode = this.first;
        if(this.size === 1){
            this.last = null;
        }
        this.first = this.first.next;
        returnNode.next = null;
        this.size--;
        return returnNode;
    }
}

let stack = new Stack;

stack.push("HEY");
stack.push("YO");
stack.push("WORD SON");