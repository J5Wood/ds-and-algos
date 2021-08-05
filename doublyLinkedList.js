class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return false;
        let returnNode = this.tail;

        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = returnNode.prev;
            this.tail.next = null;
            returnNode.prev = null;
        }
        this.length--;
        return returnNode;
    }

    shift(){
        if(!this.head) return false;
        let returnNode = this.head;

        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
        } else {
            this.head = returnNode.next
            this.head.prev = null;
            returnNode.next = null;
        }
        this.length--;
        return returnNode;
    }

    unshift(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(idx){
        if(idx < 0 || idx >= this.length) return false;
        if(!this.head) return false;
        let counter, returnNode;

        if(idx < Math.floor(this.length / 2)){
            counter = 0;
            returnNode = this.head;
            while(counter < idx) {
                returnNode = returnNode.next;
                counter++;
            }
        } else {
            returnNode = this.tail;
            counter = this.length - 1;
            while (counter > idx){
                returnNode = returnNode.prev;
                counter--;
            }
        }
        return returnNode;
    }

    set(idx, val){
        let position = this.get(idx);
        if(!!position){
            position.val = val;
            return true;
        }
        return false;
    }

    insert(idx, val){
        if(idx === 0) !!this.unshift(val);
        if(idx === this.length - 1) !!this.push(val);
        let beforeNode = this.get(idx - 1);
        if(!!beforeNode){
            let newNode = new Node(val);
            let afterNode = beforeNode.next;

            newNode.prev = beforeNode;
            newNode.next = afterNode;

            beforeNode.next = newNode;
            afterNode.prev = newNode;

            this.length++;
            return true;
        }
        return false;
    }

    remove(idx){
        if(idx === 0) return this.shift();
        if(idx === this.length - 1) return this.pop();
        let removedNode = this.get(idx)
        if(!!removedNode){
           let prevNode = removedNode.prev;
           let nextNode = removedNode.next;
           prevNode.next = nextNode;
           nextNode.prev = prevNode;
           removedNode.prev = null;
           removedNode.next = null;
           this.length--;
           return removedNode;
        }
        return false
    }
}

let list = new DoublyLinkedList();

list.push("WOWEE")
list.push("HEYEYEHH")
list.push("COWABUNGA")
list.push("BOYYYOOOOOOO")