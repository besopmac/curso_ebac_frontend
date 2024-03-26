// Crie uma classe de uma abstração;
class Dog {
  constructor(name, age, breed) {
    this.name = name;
    this.age = age;
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} dá latido!`);
  }

  grow() {
    this.age += 1;
  }
}

// Crie pelo menos duas classes que sejam herdeiras da classe criada anteriormente;
class Beagle extends Dog {
  constructor(name, age, breed) {
    super(name, age, breed);
    this.color = 'brown and white';
  }
}

class Labrador extends Dog {
  constructor(name, age, breed) {
    super(name, age, breed);
    this.size = 'large';
  }
}

class Poodle extends Dog {
  constructor(name, age, breed) {
    super(name, age, breed);
    this.coat = 'curly';
  }
}

// Crie pelo menos três instâncias de objetos; 
const d1 = new Dog('Buddy', 3, 'Bulldog');
const d2 = new Beagle('Bella', 1, 'Beagle-Poodle');
const d3 = new Labrador('Lucy', 2, 'Labrador Retriever');
const d4 = new Poodle('Peanut', 4, 'Poodle');
const d5 = new Dog('Rocky', 5, 'Corgi');
