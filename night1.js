// give the class at least 3 properties

// give the class at least 3 methods

// create two instances of the class (two cats)

// log both instances to see their properties

// invoke each method from both instances

class Cat {
    constructor(name, age, color) {
      this.name = name;
      this.age = age;
      this.color = color;
    }
  
    eat(food) {
      console.log(`${this.name} is eating ${food}!`);
    }
  
    sleep(hours) {
      console.log(`${this.name} is sleeping for ${hours} hours.`);
    }
  
    meow() {
      console.log(`${this.name} says meow!`);
    }
  }
  
  // create two instances of the class
  const fluffy = new Cat("Fluffy", 2, "white");
  const whiskers = new Cat("Whiskers", 5, "gray");
  
  // log both instances to see their properties
  console.log(fluffy);
  console.log(whiskers);
  
  // invoke each method from both instances
  fluffy.eat("fish");
  fluffy.sleep(8);
  fluffy.meow();
  
  whiskers.eat("chicken");
  whiskers.sleep(12);
  whiskers.meow();