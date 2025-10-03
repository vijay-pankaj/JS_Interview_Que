// console.log(this)//{}

// const person = {
//   name: "Vijay",
//   greet: function() {
//     console.log(this.name);
//   }
// };

// person.greet(); // "Vijay"

// function show() {
//   console.log(this);
// }
// show(); 


const person = {
  name: "Vijay",
  greet: () => {
    console.log(this.name);
  }
};

person.greet(); // undefined (because `this` comes from global scope)
