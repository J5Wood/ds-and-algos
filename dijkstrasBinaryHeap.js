class WeightedGraph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vert1, vert2, weight){
        this.adjacencyList[vert1].push({node: vert2, weight});
        this.adjacencyList[vert2].push({node: vert1, weight});
    }

    dijkstrasAlgorithm(start, end){
        const distances = {};
        const previous = {};
        const nodes = new PriorityQueue();
        for(let vert in this.adjacencyList){
            vert !== start ? distances[vert] = Infinity : distances[vert] = 0;
            previous[vert] = null;
            nodes.enqueue(vert, distances[vert])
        };
        
        while(nodes.values.length){

            let currentVert = nodes.dequeue().val;
            if(currentVert === end) break;
     
            this.adjacencyList[currentVert].forEach(edge => {
                let length = edge.weight + distances[currentVert];
                if(length < distances[edge.node]){
                    distances[edge.node] = length;
                    previous[edge.node] = currentVert
                    nodes.enqueue(edge.node, length)
                }
            })
        }
        let path = end
        let shortestPath = [];

        while(path){
            shortestPath.push(path)
            path = previous[path]
        }
        return shortestPath.reverse();
    }
}

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

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx].priority;
                if(leftChild < element){
                    swap = leftChildIdx
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx].priority;
                if( rightChild < element && rightChild < leftChild
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

let g = new WeightedGraph()

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A","B", 4)
g.addEdge("A","C", 2)
g.addEdge("B","E", 3)
g.addEdge("C","D", 2)
g.addEdge("C","F", 4)
g.addEdge("D","E", 3)
g.addEdge("D","F", 1)
g.addEdge("F","E", 1)


console.log(g.dijkstrasAlgorithm("A","E"))
