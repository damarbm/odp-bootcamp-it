export default class Animal {
  age = 20;

  constructor(name, diet, energy, canReproduce, age) {
    this.name = name;
    this.diet = diet;
    this.energy = energy;
    this.canReproduce = canReproduce;
    this.age = age;
  }

  get getAge() {
    return this.age;
  }

  get isAdult() {
    return this.age > 17;
  }
}
