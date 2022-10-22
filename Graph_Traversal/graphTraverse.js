//gps track
//check the shortest path
//web crawlers
//solving mazes
//ai -- shortest path to win the game

// dfs recursive solution

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
  depthFirstRecursive(start) {
    let result = [];
    let visited = [];
    let adjacencyList = this.adjacencyList;
    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);
    return result;
  }

  depthFirstIterative(start) {
    let stack = [start];
    let result = [];
    let visited = {};
    visited[start] = true;
    while (stack.length) {
      let currentVertex = stack.pop();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }
  //bfs traversal
  breadthFirst(start) {
    let queue = [start];
    let result = [];
    let visited = {};
    let currentVertex;
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
      return result;
    }
  }
}

let g = new Graph();
g.addVertex("Tokyo");
g.addVertex("London");
g.addVertex("NewYork");
g.addVertex("Dallas");
g.addVertex("Aspen");

g.addEdge("London", "Tokyo");
g.addEdge("Tokyo", "Dallas");
g.addEdge("Tokyo", "Aspen");
// g.removeEdge("Tokyo", "London");
// g.removeVertex("Aspen");

g.depthFirstRecursive("Tokyo");
g.depthFirstIterative("Tokyo");
g.breadthFirst("Tokyo");

console.log(g);
