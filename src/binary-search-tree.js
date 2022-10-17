const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  root1;
  constructor(){
    this.root1 =null;
  }

  root() {
    return this.root1;
  }

  add(data) {
    this.root1 = addWn(this.root1, data);

    function addWn(node, val) {
      if (!node) {
        return {data: val, left: null, right: null};
      }
      if (node.data === val) {
        return node;
      }
      if (val > node.data) {
        node.right = addWn(node.right, val);
      } else {
        node.left = addWn(node.left, val);
      }
      return node;
    }    
  }

  has(data) {
    return search(this.root1, data);

    function search(node, data) {        
      if (!node || data == null) {
        return false;
      } 
      if (node.data === data) {
        return true;
      }
      
      if(data > node.data) return search(node.right, data);    
        else return search(node.left, data);      
    }
  }

  find(data) {
    return search(this.root1, data);

    function search(node, data) {        
      if (!node || data == null) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
       
      if(data > node.data) return search(node.right, data);    
        else return search(node.left, data);      
    }
  }

  remove(data) {
    this.root1 = removeN(this.root1, data);
    function removeN(node, data) {
      if (!node) {
        return null;
      }

      if (data > node.data) {
        node.right = removeN(node.right, data);
        return node;
      } else if (node.data > data) {
        node.left = removeN(node.left, data);
        return node;
      } else {        
        if (!node.left && !node.right) {          
          return null;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        if (!node.left) {          
          node = node.right;
          return node;
       }

        let maxFromLeft = node.left;
        while (maxFromLeft.right) {
          maxFromLeft = maxFromLeft.right;
        }
        node.data = maxFromLeft.data;

        node.left = removeN(node.left, maxFromLeft.data);

        return node;
      }
    }
  }

  min() {
    if (!this.root1) {
      return null;
    }
    let node = this.root1;
    while (node.left !== null) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.root1) {
      return null;
    }
    let node = this.root1;
    while (node.right !== null) {
      node = node.right;
    }
    return node.data;
  }

}

module.exports = {
  BinarySearchTree
};