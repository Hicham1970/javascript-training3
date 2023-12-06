const sentence = "I like to still at home coding than doing that on a cafe !!"

let a = sentence.split(""); 
console.log(a); 
let b = a.map(parseInt); 
console.log(b); 
let c = b.filter((e) => e > 0);
console.log(c); 
let d = c.reduce((a, b) => a + b); 
console.log(d); 
let e = d.toString(); 
console.log(e); 
let f = e.split(""); 
console.log(f); 
let g = f.reverse(); 
console.log(g);
let h = f.join(); 
console.log(h);

// Output : 9,3,2.
