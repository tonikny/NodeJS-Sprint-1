const { sumar,restar,multiplicar,dividir } = require('../app/operacions_matematiques');


describe("Tests de sumar", () => {

  test('sumar 1 + 2 es igual a 3', () => {
    expect(sumar(1, 2)).toBe(3);
  });

  test('sumar 3 + 2 + 5 + 1 es igual a 11', () => {
    expect(sumar(3, 2, 5, 1)).toBe(11);
  });

  test('sumar amb un operand', () => {
    expect(sumar(1)).toBeUndefined();
  });

  test('sumar sense operands', () => {
    expect(sumar()).toBeUndefined();
  });

  test('sumar strings', () => {
    expect(sumar('abc', 'xyz')).toBeUndefined();
  });
  
});


describe("Tests de restar", () => {
  test('restar 2 - 1 es igual a 1', () => {
    expect(restar(2, 1)).toBe(1);
  });
});


describe("Tests de multiplicar", () => {
  test('multiplicar 1 * 2 es igual a 2', () => {
    expect(multiplicar(1, 2)).toBe(2);
  });
});


describe("Tests de dividir", () => {
  test('dividir 4 / 2 es igual a 2', () => {
    expect(dividir(4, 2)).toBe(2);
  });
});
