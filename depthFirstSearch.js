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

    depthFirstSearchPreOrder(){
        if(!this.root) return undefined;
        
        let data = []
        // Could just put this.root into traverse function, but setting as variable lets you specify a node to start from if you don't want to start at the root
        let current = this.root

        function traverse(node){
                data.push(node.val)
                 // can search in any particular order, for this lesson I'll go from left to right 
                if(node.left) traverse(node.left);
                if(node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }

    depthFirstSearchPostOrder(){
        if(!this.root) return undefined;
        let data = [];
        let current = this.root;

        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.val);
        }
        traverse(current);
        return data;
    }
}

let tree = new BinaryTree();
tree.insert(10);
tree.insert(15);
tree.insert(20);
tree.insert(6);
tree.insert(3);
tree.insert(8);

console.log(tree.depthFirstSearchPreOrder())

console.log(tree.depthFirstSearchPostOrder())