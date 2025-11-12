import { Node } from '../extensions/list-tree.js';

export default class BinarySearchTree {

  constructor() {
    this.rootTree = null;
  }

  root() {
    return this.rootTree;  
  }
  
  add(data) {
    if(this.rootTree === null){
      this.rootTree = new Node(data);
      return;
    }
    this.rootTree.add(data);
  }

  has(data) {
    return this.find(data) !== null;
  } 

  find(data) {
    let current = this.rootTree;

    while(current !== null){
      if(current.data === data){
        return current;
      } else if(data < current.data){
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return null;
  }

  remove(data) {
    if(this.rootTree){
      this.rootTree = this.rootTree.remove(data);
    }
    
  }

  min() {

    if (this.rootTree == null){
      return null;
    }

    let current = this.rootTree;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;

  }

  max() {
    if (this.rootTree === null) {
      return null;
    }

    let current = this.rootTree;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
};
