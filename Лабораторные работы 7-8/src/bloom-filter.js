export default class BloomFilter {

  constructor() {
    this.size = 18;        
    this.storage = this.createStore(this.size);
  }

  insert(item) {
    const hashes = this.getHashValues(item);
    hashes.forEach(index => this.storage.setValue(index));  
  }

  mayContain(item) {
    const hashes = this.getHashValues(item);
    return hashes.every(index => this.storage.getValue(index) === 1);
  }

  createStore(size) {
    const store = new Array(size).fill(0);

    return {
      getValue(index) {
        return store[index];
      },
      setValue(index) {
        store[index] = 1;
      }
    };
  }

  hash1(item) {
    let hash = 0;
    for (let i = 0; i < item.length; i++) {
      const char = item.charCodeAt(i);
      hash = (hash << 5) + hash + char;
      hash &= hash;
      hash = Math.abs(hash);
    }
    return hash % this.size;
  }

  hash2(item) {
    let hash = 5381;
    for (let i = 0; i < item.length; i++) {
      hash = ((hash << 5) + hash) + item.charCodeAt(i);
    }
    return Math.abs(hash % this.size);
  }

  hash3(item) {
    let hash = item.length;
    for (let i = 0; i < item.length; i++) {
      hash ^= item.charCodeAt(i);
    }
    return hash % this.size;
  }

  getHashValues(item) {
    return [
      this.hash1(item),
      this.hash2(item),
      this.hash3(item)
    ];
  }
}
