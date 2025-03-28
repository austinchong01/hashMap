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

    console.log(hashCode)

    // check if key already exists
    if(this.buckets[hashCode]){
        // same hashCode
        console.log(this.buckets[hashCode])
        if (this.buckets[hashCode].key === key){
            console.log("COLLISION")
        } else {
            console.log("diff keys")
        }
    } else {
        // does not exist
        this.buckets[hashCode] = [key, value];
    }
  }
}
