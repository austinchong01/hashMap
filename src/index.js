// import "./styles.css";
import HashMap from "./hash.js";

const test = new HashMap();

// hashMap.set("aweston", 1)
test.set('apple', 'red')
test.set('banana', 'yellow')
// test.set('carrot', 'orange')
// test.set('dog', 'brown')
// test.set('elephant', 'gray')
// test.set('frog', 'green')
// test.set('grape', 'purple')
// test.set('hat', 'black')
// test.set('ice cream', 'white')
// test.set('jacket', 'blue')
// test.set('kite', 'pink')
// test.set('lion', 'golden')

// if (index < 0 || index >= buckets.length) {
//   throw new Error("Trying to access index out of bounds");
// }
test.buckets[0] = 1;
console.log(test.buckets)
console.log(test.buckets.includes(1))