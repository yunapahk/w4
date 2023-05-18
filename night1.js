



// create two instances of the class (two cats)

// log both instances to see their properties

// invoke each method from both instances

class Cat {
    constructor(name, age, color) {
      // give the class at least 3 properties
      this.name = name;
      this.age = age;
      this.color = color;
    }

    // give the class at least 3 methods
    eat(tuna) {
      console.log(`${this.name} is eating ${tuna}.`);
    } 

    drink(milk) {
      console.log(`${this.name} is drinking ${milk}!`);
    }
  
    cuddle(hours) {
      console.log(`${this.name} wants to cuddle for ${hours}`);
    }
  }
  
  // create two instances of the class
  const cutiePie = new Cat("Cutie Pie", 2, "adorable");
  const Fatty = new Cat("Fatty", 5, "Ginormous");
  
  // log both instances to see their properties
  console.log(cutiePie);
  console.log(Fatty);
  
  // invoke each method from both instances
  cutiePie.eat("smelly");
  cutiePie.drink("Baileys");
  cutiePie.cuddle(24);
  
  Fatty.eat("victims");
  Fatty.drink("Jameson");
  Fatty.cuddle(24);