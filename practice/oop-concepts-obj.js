// Inheritance
// 1 UPDATED
function Food() {}
function Bread() {}

let basicFood = new Food();

Bread.prototype = basicFood;

let bread = new Bread();
bread.constructor == Food;

Bread.prototype.constructor = Bread;
bread = new Bread();
bread.constructor == Bread;

// 2 UPDATED
function junkFood() {
  this.name = "snacks";
}

function chips() {
  junkFood.call(this);
}

chips.prototype = Object.create(junkFood.prototype);
const pringles = new chips();
console.log(pringles.name);

// 3 
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


// Encapsulation
let person = {
  name: "Default name",
  setName: function (value) {
    let exp = new RegExp(/\d+/);
    if (exp.test(value)) {
      alert("Invalid Name");
    } else {
      this.name = value;
    }
  },
  getName: function () {
    return this.name;
  },
};

alert(person.getName()); // Default name
person.setName("Another name");
alert(person.getName()); // Another name
person.setName(24); // Invalid Name
alert(person.getName()); // Another name



// Polymorphism UPDATED
class DogBreed {
  constructor(age, breed) {
    this.age = age;
    this.breed = breed;
  }
}

class Labrador extends DogBreed {
  constructor(age, breed, color) {
    super(age, breed);
    this.color = color;
  }

  showDogInfo() {
    console.log(
      "Age is " +
        this.age +
        " the breed is " +
        this.breed +
        " color is " +
        this.color
    );
  }
}

class Staff extends DogBreed {
  constructor(age, breed, color) {
    super(age, breed);
    this.color = color;
  }

  showDogInfo() {
    console.log(
      "Age is " +
        this.age +
        " the breed is " +
        this.breed +
        " color is " +
        this.color
    );
  }
}

class Terrier extends DogBreed {
  constructor(age, breed, color) {
    super(age, breed);
    this.color = color;
  }

  showDogInfo() {
    console.log(
      "Age is " +
        this.age +
        " the breed is " +
        this.breed +
        " color is " +
        this.color
    );
  }
}

let labrador = new Labrador("5", "Labrador", "brown");
var staff = new Staff("10", "Staff", "brown and white");
var terrier = new Terrier("4", "Terrier", "grey");