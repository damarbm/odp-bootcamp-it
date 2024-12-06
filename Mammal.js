import Animal from "./Animal.js";

export default class Mammal extends Animal {
  constructor(name, diet, energy, canReproduce, age) {
    // inherit attributes from parent's constructor
    super(name, diet, energy, canReproduce, age);
  }

  // implementation of polymorphism
  get isAdult() {
    return this.getAge > 50;
  }
}
