export default class Stack {

  constructor(){
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop()
  }

  peek() {
    return this.items.length > 0 
      ? this.items[this.items.length - 1] 
      : undefined;
  }
}
