export default class HashMap {
  constructor() {
    this.loadFactor = 0.0;
    this.capacity = 16;
    this.buckets = [];
  }

  hash(key) {
    let hashCode = 0;
  
    const primeNumber = 31;
    for (let i = 0; i < key.length; i += 1) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i) ) % this.capacity;
    }
  
    return hashCode;
  }

  set(key, value) {
    const hashCode = this.hash(key);
    // const bucket = this.buckets[hashCode];

    // check if bucket is already populated
    if(this.buckets[hashCode]){
        // populated
    } else {
        // not populated
        const obj = {}
        obj[key] = value;
        this.buckets[hashCode] = obj;
    }

  }
}
