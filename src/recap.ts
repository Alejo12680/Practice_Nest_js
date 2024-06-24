const myName = 'Alejo';
const myAge = 12;

const suma = (a: number, b: number) => {
  return a + b;
};

suma(15, 25);

class Persona {
  /* private age: number;
  private name: string;

  constructor(age: number, name: string) {
    this.age = age;
    this.name = name;
  } */

  // Tambien se puede manejar asi:
  constructor(
    private age: number,
    private name: string,
  ) {}

  getSummary() {
    return `My name is ${this.name}, ${this.age}`;
  }
}

const nicolas = new Persona(24, 'alejandro ramirez');

// acceder a los metodos
nicolas.getSummary();
