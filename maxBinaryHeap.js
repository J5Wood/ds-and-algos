class MaxBinaryHeap{
    constructor(){
        this.values = [];
    }


// my insert and bubble methods
    insert(val){
        this.values.push(val)
        let idx = this.values.length -1;

        if(idx > 0) this.bubbleUp(idx);
        return this;
    }

    bubbleUp(idx){
        let parentIdx = Math.floor((idx -1) / 2);
        if(this.values[idx] <= this.values[parentIdx]) return;
        
        [this.values[idx], this.values[parentIdx]] = [this.values[parentIdx], this.values[idx]]
        if(parentIdx > 0) this.bubbleUp(parentIdx);
    }



    extractMax(){
        let max = this.values[0];
        let end = this.values.pop();
        if (this.values.length > 0){
            this.values[0] = end;
            this.sinkDown()
        }
        return max;
    }

    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild > element){
                    swap = leftChildIdx
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
                ){
                    swap = rightChildIdx; 
                }
            }
            if(swap === null) break;
            [this.values[idx], this.values[swap]] = [this.values[swap], this.values[idx]];
            idx = swap;
        }
    }



// Colt steeles insert method

//     insert(val){
//         this.values.push(val);
//         this.bubbleUp();

//         return this;
//     }

//     bubbleUp(){
//         let idx = this.values.length - 1;
//         let element = this.values[idx];
        
//         while(idx > 0){
//             let parentIdx = Math.floor((idx -1) / 2);
//             let parent = this.values[parentIdx];
//             if(element < parent) break;
//             this.values[parentIdx] = element;
//             this.values[idx] = parent;
//             idx = parentIdx;
//         }
//     }

}


let heap = new MaxBinaryHeap()

heap.insert(23);
heap.insert(12);
heap.insert(10);
heap.insert(8);
heap.insert(4);
heap.insert(45);
heap.insert(56);
heap.insert(34);
heap.insert(2);
heap.insert(9);
heap.insert(15);
heap.insert(99);

// heap.extractMax();