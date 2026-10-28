
//example for var, let and const
var x = 10; // Var can be redeclared and updated
let y = 20; // let can be updated but cant redeclared
const z = 30; // const cannot be updated or redeclared

if (true) {
    var x = 40; // This will overwrite the previous value of x
    let y = 50; // This will create a new variable y that is scoped to this block
    // z = 60; // This will throw an error because z is a constant
    console.log("Inside block - x:", x); // 40
    console.log("Inside block - y:", y); // 50
    console.log("Inside block - z:", z); // 30
}
console.log("Outside block - x:", x); // 40
console.log("Outside block - y:", y); // 20
console.log("Outside block - z:", z); // 30
