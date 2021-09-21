class Node{
    constructor(val){
        this.val = val
        this.next = null;      
    }
}

class SinglyLinkedList{
    constructor(val){
        this.val = val
        this.next = null;      
    }
    push(val){
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
            this.length++;
        
        return this;
    }
    set(ind, val){
        if(!this.head) return false;
        let node = this.head;
        while(node && ind > 0){
            node = node.next;
            ind--;
        }
        if(node){
            node.val = val;
            return true;
        }
        return false;
    }
    get(val){
        console.log(val)
       if(!this.head) return undefined;
       let node = this.head;
       while(node && val > 0){
           val--;
           node = node.next;
       }
       if(node){
           return node;
       }
       return undefined;
    }
}