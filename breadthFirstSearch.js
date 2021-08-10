class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
        this.count = 1;
    }
}


class BinaryTree{
    constructor(){
        this.root = null;
    }

    insert(val){
        let newNode = new Node(val)
        if(!this.root){
            this.root = newNode
            return this;
        }
        let checkNode = this.root;
        let foundHome = false;

        while(!foundHome){
            if(val === checkNode.val){
                checkNode.count++;
            } else if (val > checkNode.val){
                if(!!checkNode.right) checkNode = checkNode.right;
                else {
                    checkNode.right = newNode;
                    foundHome = true;
                }
            } else {
                if(!!checkNode.left) checkNode = checkNode.left;
                else {
                    checkNode.left = newNode;
                    foundHome = true;
                }
            }
        }
        return this;
    }

    find(val){
        if(!this.root) return false;
        let checkNum = this.root;
        while(!!checkNum){
            if (val === checkNum.val){
                return checkNum
            } else if (val > checkNum.val){
                checkNum = checkNum.right
            } else {
                checkNum = checkNum.left
            }
        }
        return false
    }

    breadthFirstSearch(){
        if(!this.root) return undefined;
        let queue = new Queue();
        let returnArr = []
        queue.enqueue(this.root)
        while( queue.size > 0){
            // Could add a loop to go over children instead of hard coding left or right for a larger than binary tree
            if(queue.first.node.left) queue.enqueue(queue.first.node.left);
            if(queue.first.node.right) queue.enqueue(queue.first.node.right);
            returnArr.push(queue.dequeue().node.val)
        }
        return returnArr;
    }
}

class QueueNode{
    constructor(node){
        this.node = node;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(node){
        let newNode = new QueueNode(node);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++;
        return this;
    }

    dequeue(){
        if(!this.first) return undefined;
        let returnNode = this.first;
        if (this.first === this.last){
            this.last = null;
        }
        this.first = returnNode.next
        returnNode.next = null;
        returnNode.left = null;
        returnNode.right = null;
        this.size--;
        return returnNode;
    }
}


let tree = new BinaryTree();
tree.insert(10);
tree.insert(15);
tree.insert(20);
tree.insert(6);
tree.insert(3);
tree.insert(8);

console.log(tree.breadthFirstSearch())