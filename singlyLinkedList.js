class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    shift(){
        if(!this.head) return undefined;
        let temp = this.head;
        this.head = temp.next;
        this.length--;
        if (this.length === 0){
            this.tail = null;
        }
        return temp;
    }

    unshift(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++;
        return list;
    }

    push(val) {
        let newNode = new Node(val)
        if (!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if(!this.head) return undefined;
        let newTail = this.head;
        let checkNode = newTail;
        while(checkNode.next){
            newTail = checkNode;
            checkNode = checkNode.next;
        }
        newTail.next = null;
        this.tail = newTail;
        this.length--;
        if (this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return checkNode;
    }

    get(idx){
        if(idx < 0 || idx >= this.length){
            return null;
        }
        let returnNode = this.head
        for (let i = 0; i < idx; i++){
            returnNode = returnNode.next
        }
        return returnNode;
    }

    set(idx, val){
        let editNode = this.get(idx);
        if (!!editNode){
            editNode.val = val;
            return true;
        }
        return false;
    }

    insert(idx, val){
        if(idx < 0 || idx >= this.length) return false;
        if(idx === 0) return !!this.unshift(val);
        if(idx === this.length - 1) return !!this.push(val);

        let newNode = new Node(val);
        let insertPosition = this.get(idx - 1);
        newNode.next = insertPosition.next;
        insertPosition.next = newNode;
        this.length++;
        return true;
    }

    remove(idx){
        if(idx < 0 || idx >= this.length) return false;
        if(idx === 0) return this.shift();
        if(idx === this.length - 1) return this.pop();
        let prevNode = this.get(idx - 1);
        let deleteNode = prevNode.next;
        prevNode.next = deleteNode.next;
        this.length--;
        return deleteNode;
    }

    reverse(){
        if(!this.head) return false;
        if(this.length === 1) return this;
        
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;
        for( let i = 0; i < this.length - 1; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this

        // this.tail = this.head;
        // let prev = this.tail;
        // let temp = prev.next;
        // prev.next = null;
        // let next = temp.next;
        // while(next){
        //     temp.next = prev;
        //     prev = temp;
        //     temp = next;
        //     next = temp.next;
        // }
        // temp.next = prev;
        // this.head = temp;
    }
}

var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")