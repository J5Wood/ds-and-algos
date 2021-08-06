class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
        this.count = 1;
    }
}


class BinarySearchTree{
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
}

let tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);