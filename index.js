import Animal from "./Animal.js";
import Mammal from "../Mammal.js";

const rabbit = new Animal("Rabbit", "Omnivore", 100, true, 8);
const orangUtan = new Mammal("Otan", "Omnivore", 200, false, 100);

console.log(orangUtan.isAdult);
