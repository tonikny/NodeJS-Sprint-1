const UsaPersones = require('../app/UsaPersones');
const Persona = require('../app/Persona');


// Preparem el mock de la classe Persona
jest.mock('../app/Persona');

const mockDirNom = jest.fn();
Persona.mockImplementation(() => {
  return {
    dirNom: mockDirNom
  };
});


describe ('Tests Persona', () => {

  test('dirNom', () => {
    const Persona = jest.requireActual('../app/Persona'); // fem servir la classe no mockeada
    const p = new Persona('Toni');
    expect(p.dirNom()).toEqual('Toni');
  });
});


describe ('Mock Tests', () => {

  beforeEach(() => {
    Persona.mockClear();
    mockDirNom.mockClear();
  });

  test('UsaPersones pot fer new() sense errors', () => {
    const usaPersones = new UsaPersones();
    expect(usaPersones).toBeTruthy(); // Constructor ran with no errors
  });

  test('Si no hi ha parametres no es crida a Persona i si nhi ha, si', () => {
    let usaPersones = new UsaPersones();
    expect(Persona).not.toHaveBeenCalled();
    usaPersones = new UsaPersones(["Toni", "Pep"]);
    expect(Persona).toHaveBeenCalled();
  });

  test('Es crida a dirNom() un cop per cada item de la llista', () => {
    const llista = ["Toni", "Pep", "Pere"];
    const usaPersones = new UsaPersones(llista);
    usaPersones.llistaPersones();
    expect(mockDirNom).toHaveBeenCalledTimes(3);
  });

});
