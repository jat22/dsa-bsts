class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);
    if(this.root === null){
      this.root = newNode;
      return this
    } 
    else{
      let curr = this.root
      while(curr){
        if(newNode.val < curr.val){
          if(curr.left) curr = curr.left;
          else {
            curr.left = newNode
            return this
          }
        }
        else if(newNode.val > curr.val){
          if(curr.right) curr = curr.right;
          else {
            curr.right = newNode
            return this
          }
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    const newNode = new Node(val);
    const tree = this

    function helper(node, cur){
      if(!cur){
         tree.root = node;
        return tree
      } else if(node.val < cur.val){
        if(cur.left) return helper(node, cur.left)
        else {
          cur.left = node
          return tree
        } 
      } else {
        if(cur.right) return helper(node, cur.right)
        else{
          cur.right = node
          return tree
        }
      }
    };

    helper(newNode, this.root);
    return this
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let cur = this.root;
    while(cur){
      if(cur.val === val){
        return cur
      } else if(cur.val > val){
          cur = cur.left
      } else{
          cur = cur.right
      }
    }
    return
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    function helper(val, cur){
      if(!cur) return
      if(cur.val === val) return cur;
      else if(cur.val > val) return helper(val, cur.left)
      else return helper(val, cur.right)
    }
    return helper(val, this.root)
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const result = [];
    function traverse(node){
      result.push(node.val)
      if(node.left) traverse(node.left)
      if(node.right) traverse(node.right)
    }
    traverse(this.root)
    return result
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const result = [];
    function traverse(node){
      if(node.left) traverse(node.left);
      result.push(node.val);
      if(node.right) traverse(node.right)
    }
    traverse(this.root)
    return result
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const result = [];
    function traverse(node){
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      result.push(node.val);
    }
    traverse(this.root)
    return result
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const result = [];
    const toAddQueue = [this.root];

    while(toAddQueue.length){
      let cur = toAddQueue.shift();
      if(cur.left) toAddQueue.push(cur.left);
      if(cur.right) toAddQueue.push(cur.right)
      result.push(cur.val)
    }
    return result
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
