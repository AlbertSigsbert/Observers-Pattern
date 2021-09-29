/* A Youtube subscription example using the Observers Pattern */

function codewithMicah() {
  this.observers = [];
  // this.observers = [juma,abdul,musa,james]
}

codewithMicah.prototype = {
  subscribe: function (fn) {
    this.observers.push(fn);
    console.log(`${fn.name} has Suscribed`);
  },

  unsubscribe: function (fn) {
    this.observers = this.observers.filter((item) => {
      if (item !== fn) {
        return item;
      }
    });
    console.log(`${fn.name} has Unuscribed`);
  },

  fire: function (fn) {
    this.observers.forEach((item) => {
      item.call();
    });
  },
};

function juma() {
  console.log("Juma! CodewithMika has uploaded a new video!!!");
}
function peter() {
  console.log("Peter! CodewithMika has uploaded a new video!!!");
}
function leonard() {
  console.log("Leonard! CodewithMika has uploaded a new video!!!");
}
function pep() {
  console.log("Pep! CodewithMika has uploaded a new video!!!");
}
function milner() {
  console.log("Milner! CodewithMika has uploaded a new video!!!");
}

const obj1 = new codewithMicah();
obj1.subscribe(juma);
obj1.subscribe(peter);
obj1.subscribe(leonard);
obj1.subscribe(pep);
obj1.subscribe(milner);

obj1.unsubscribe(juma);
obj1.unsubscribe(peter);
obj1.fire();
