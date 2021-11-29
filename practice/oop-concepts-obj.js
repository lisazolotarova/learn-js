// Inheritance
// Example with __proto__
let scienceCrew = {
  field: neurobiology,
  education: "Ph.D",
  researchInfo() {
    alert("Biology of human behavior");
  },
};

let scientist1 = {
  name: Mark,
  age: 29,
  __proto__: scienceCrew,
  researchInfo() {
    alert("Biology of human");
  },
};

let scientist2 = {
  name: Ben,
  age: 35,
  experience: "5 years",
  __proto__: scienceCrew,
};

scientist1.researchInfo();
alert(scientist2.experience);

// Example with Classes
class Person {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    return 'Hey there, I am ' + this.name;
  }
}

class Men extends Person {
  constructor(name) {
    super(name)
  }
}
class RandomGuy extends Person {
  constructor(name) {
    super(name)
  }
}

const dylan = new Men('Dylan');
const mark = new RandomGuy('Mark');

console.log(dylan.sayName()) 
console.log(mark.sayName())


// Encapsulation - TBC


// Polymorphism
class Animal {
  constructor(species, lifetime) {
    this.species = species;
    this.lifetime = lifetime;
  }
}

class Pet extends Animal {
  constructor(species, lifetime, breed) {
    super(species, lifetime);
    this.breed = breed;
  }

  addInfo() {
    console.log("Danger level for human: low")
  } 
}

let wildBeing = new Animal("cougar", "15-20 years");
console.log(wildBeing);

let fluffyFriend = new Pet("dog", "12-15 years", "rottweiler");
console.log(fluffyFriend);
console.log(fluffyFriend.addInfo);
