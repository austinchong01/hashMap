import LinkedList from "./linked.js";

export default class HashMap {
  constructor() {
    this.loadFactor = 0;
    this.numElements = 0;
    this.capacity = 16;
    this.buckets = [];
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i += 1) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  set(key, value) {
    const hashCode = this.hash(key);

    if (!this.buckets[hashCode]) {
      // empty bucket
      this.buckets[hashCode] = new LinkedList();
      this.buckets[hashCode].prepend(key, value);
    } else {
      // bucket exists
      if (!this.buckets[hashCode].contains(key)) {
        // add to linked list if no key exists
        this.buckets[hashCode].append(key, value);
      } else {
        // overwrite value
        this.buckets[hashCode].replace(key, value);
      }
    }

    // change load factor
    this.numElements += 1;
    this.loadFactor = this.numElements / this.capacity;
    if (this.loadFactor >= 0.75) {
      // increase capacity
      // this.capacity *= 2;
    }

    console.log(this.buckets[hashCode].toString());
  }

  get(key) {
    const hashCode = this.hash(key);
    if (this.buckets[hashCode]) {
      const node = this.buckets[hashCode].find(key);
      if (node) return node.value;
    }
    return null;
  }

  has(key) {
    const hashCode = this.hash(key);
    if (this.buckets[hashCode]) {
      if (this.buckets[hashCode].contains(key)) return true;
    }
    return false;
  }

  remove(key) {
    const hashCode = this.hash(key);
    if (this.buckets[hashCode]) {
      if (this.buckets[hashCode].remove(key)){
        console.log(this.buckets[hashCode].toString());
        return true;
      }
    }
    return false;
  }

  // entries() {
  //   const entries = []
  //   for (let i = 0; i < this.buckets.length; i += 1){
  //     const element = [];
  //   }
  // }
}
