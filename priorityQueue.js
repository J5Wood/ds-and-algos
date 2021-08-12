class Node{
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue{
    constructor(){
        this.values = [];
    }

    enqueue(val, priority){
        let newNode = new Node(val, priority)


        this.values.push(newNode)
        let idx = this.values.length -1;

        if(idx > 0) this.bubbleUp(idx);
        return this;
    }

    bubbleUp(idx){
        let parentIdx = Math.floor((idx -1) / 2);
        let current = this.values[idx];
        let parent = this.values[parentIdx]
        if(current.priority >= parent.priority) return;
        
        [this.values[idx], this.values[parentIdx]] = [parent, current]
        if(parentIdx > 0) this.bubbleUp(parentIdx);
    }

    dequeue(){
        const priority = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0){
            this.values[0] = end;
            this.sinkDown()
        }
        return priority;
    }

    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0].priority;
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            // If you break left and right assignment up like this, 
            // if one of the values doesn't exist it won't throw an error
//            debugger
            if(leftChildIdx < length){
//                 debugger
                leftChild = this.values[leftChildIdx].priority;
                if(leftChild < element){
                    swap = leftChildIdx
                }
            }
            if(rightChildIdx < length){
//                 debugger
                rightChild = this.values[rightChildIdx].priority;
                if( rightChild < element && rightChild < leftChild
                    // Colt had:
                    // One check to see if left wasn't bigger but right is bigger
                    // Other check to see if left was bigger but right is bigger than left
                    // (swap === null && rightChild > element) ||
                    // (swap !== null && rightChild > leftChild)
                    //Why not just check to see if right is bigger than element and left. Both should have to be true...
                    // Left will always fill up first.
                ){
                    swap = rightChildIdx; 
                }
            }
            if(swap === null) break;
            [this.values[idx], this.values[swap]] = [this.values[swap], this.values[idx]];
            idx = swap;
        }
    }
}

let queue = new PriorityQueue();

queue.enqueue("ELLO ELLO", 1);
queue.enqueue("YO", 2);
queue.enqueue("BOYO", 3);
queue.enqueue("WHATUP", 2);
queue.enqueue("SGOOD", 1);
queue.enqueue("OY BRUV", 3);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());