const UsaPersones = require('../app/UsaPersones');
const Persona = require('../app/Persona');

jest.mock('../app/Persona');

const mockDirNom = jest.fn();
Persona.mockImplementation(() => {
  return {
    dirNom: mockDirNom
  };
});

beforeEach(() => {
  Persona.mockClear();
  mockDirNom.mockClear();
});

it('The consumer should be able to call new() on Persona', () => {
  const usaPersones = new UsaPersones();
  expect(usaPersones).toBeTruthy(); // Constructor ran with no errors
});

it('We can check if the consumer called the class constructor', () => {
  let usaPersones = new UsaPersones();
  expect(Persona).not.toHaveBeenCalled(); // ensure our mockClear() is working
  usaPersones = new UsaPersones(["Toni", "Pep"]);
  expect(Persona).toHaveBeenCalled();
});

it('We can check if the consumer called a method on the class instance', () => {
  //const consoleSpy = jest.spyOn(console, 'log');
  const llista = ["Toni", "Pep", "Pere"];
  const usaPersones = new UsaPersones(llista);
  usaPersones.llistaPersones();
  expect(mockDirNom).toHaveBeenCalledTimes(3);
});


