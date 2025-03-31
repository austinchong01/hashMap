// import "./styles.css";
import HashMap from "./hash.js";

const test = new HashMap();

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('banana', 'TEST')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
test.set('moon', 'silver')

console.log(test.clear())


for(let i = 0; i < test.buckets.length; i += 1){
    if (test.buckets[i])
        console.log(test.buckets[i].toString());
    else
        console.log("empty")
}

// console.log(test.entries());

// if (index < 0 || index >= buckets.length) {
//  
//  throw new Error("Trying to access index out of bounds");
// }