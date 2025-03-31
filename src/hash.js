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
      console.log(this.loadFactor)
      // this.capacity *= 2;
    }
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
      if (this.buckets[hashCode].remove(key)) {
        console.log(this.buckets[hashCode].toString());
        this.numElements -= 1;
        this.loadFactor = this.numElements / this.capacity;
        return true;
      }
    }
    return false;
  }

  length() {
    return this.numElements;
  }

  clear() {
    this.loadFactor = 0;
    this.numElements = 0;
    this.capacity = 16;
    this.buckets = [];
  }

  keys() {
    const keys = [];
    for (let i = 0; i < this.buckets.length; i += 1) {
      if (!this.buckets[i]) continue;
      let node = this.buckets[i].head;
      while (node) {
        keys.push(node.key);
        node = node.nextNode;
      }
    }
    return keys;
  }

  values() {
    const values = [];
    for (let i = 0; i < this.buckets.length; i += 1) {
      if (!this.buckets[i]) continue;
      let node = this.buckets[i].head;
      while (node) {
        values.push(node.value);
        node = node.nextNode;
      }
    }
    return values;
  }

  entries() {
    const entries = [];
    for (let i = 0; i < this.buckets.length; i += 1) {
      if (!this.buckets[i]) continue;
      let node = this.buckets[i].head;
      while (node) {
        let pair = [];
        pair.push(node.key);
        pair.push(node.value);
        entries.push(pair);
        node = node.nextNode;
      }
    }
    return entries;
  }
}
