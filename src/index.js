// import "./styles.css";
import HashMap from "./hash.js";

const test = new HashMap();

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('banana', 'green')
// test.set('carrot', 'orange')
// test.set('dog', 'brown')
// test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
console.log(test.get("hat"))

// if (index < 0 || index >= buckets.length) {
//  
//  throw new Error("Trying to access index out of bounds");
// }