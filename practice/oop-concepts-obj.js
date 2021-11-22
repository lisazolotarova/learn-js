// Inheritance
let scienceCrew = {
    field: neurobiology,
    education: "Ph.D",
    researchInfo() {
        alert("Biology of human behavior")
    }
  };
  
  let scientist1 = {
    name: Mark,
    age: 29,
    __proto__: scienceCrew
  };
  
  let scientist2 = {
    name: Ben,
    age: 35,
    experience: "5 years",
    __proto__: scienceCrew
  };
  
  scientist1.researchInfo();
  alert(scientist2.experience); 

// Encapsulation
class Customer {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }

    add_Review(comment) {
        this.comment = comment;
    }

    getReviewDetails() {
        console.log(`User ${this.nickname}, Product feedback: ${this.comment}`);
    }
}
 
let customer1 = new customer('Ron', 34678);
customer1.add_Review('Not bad');
customer1.getReviewDetails();

// Polymorphism
