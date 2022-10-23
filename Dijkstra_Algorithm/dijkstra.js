// Edsger Dijkstra, in full Edsger Wybe Dijkstra,
//  (born May 11, 1930, Rotterdam, Netherlands—died August 6,
//  2002, Nuenen), Dutch computer scientist who
//   developed the paradigm
// of structured programming for writing computer programs.

//famous and widely used algorithm around ...
//finds rhe shortest path between two vertices on a graphs?
//what is the fastest way to get from point a and  point b ??

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

let q = new PriorityQueue();

q.enqueue("A", 10);
q.enqueue("B", 2);
q.enqueue("C", 5);
q.enqueue("D", 8);
q.enqueue("E", 6);

console.log(q);

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  //Dijkstra PseudoCode//

  Dijkstra(start, finish) {
    let nodes = new PriorityQueue();
    let distances = {};
    let previous = {};
    let path = [];
    let smallest;
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          let nextNode = this.adjacencyList[smallest][neighbor];
          console.log(nextNode);
          let candidate = distances[smallest] + nextNode.weight;
          if (candidate < distances[nextNode.node]) {
            distances[nextNode.node] = candidate;
            previous[nextNode.node] = smallest;
            nodes.enqueue(nextNode.node, candidate);
          }
        }
      }
    }
    console.log(path);
    return path.concat(smallest).reverse();
  }
}

let graph = new WeightedGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "C", 10);
graph.addEdge("A", "B", 5);
graph.addEdge("B", "F", 7);
graph.addEdge("D", "E", 6);
graph.addEdge("D", "F", 3);
graph.addEdge("E", "F", 3);

graph.Dijkstra("A", "E");
console.log(graph);
