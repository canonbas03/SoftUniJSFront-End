function catManager(arr) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  for (let catStr of arr) {
    let [name, age] = catStr.split(" ");
    let cat = new Cat(name, age);
    cat.meow();
  }
}

catManager(["Candy 1", "Poppy 3", "Nyx 2"]);
