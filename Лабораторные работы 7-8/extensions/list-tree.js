export class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  add(data){
    if(this.data === data) return;
    if(data < this.data){
      this.addLeft(data);
    } else{
      this.addRight(data);
    }

  }

  addLeft(data){
    if(this.left){
      return this.left.add(data);
    }
    this.left = new Node(data);
  }

  addRight(data){
    if(this.right){
      return this.right.add(data);
    }
    this.right = new Node(data);
  }

  remove(data){

    if(data < this.data){
      this.left = this.left ? this.left.remove(data) : null;
      return this;
    }
    if(data > this.data){
      this.right = this.right ? this.right.remove(data) : null;
      return this;
    }

    if(!this.left && !this.right){
      return null;
    }
    if (!this.left) {
      return this.right;
    }
    if (!this.right) {
      return this.left; 
    }

    const successor = this.right._findMin();
    this.data = successor.data;
    this.right = this.right.remove(successor.data);
    return this;
  }

  _findMin() {
  let current = this;
  while (current.left !== null) {
    current = current.left;
  }
  return current;
  }

}
