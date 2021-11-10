const {Abs, Miclasse} = require('../app/Miclasse')

test('Abs no es pot instanciar directament', () => {
  expect(() => new Abs()).toThrow("No es pot instanciar la classe abstracta Abs");
});

test('Miclasse es pot instanciar', () => {
  const c = new Miclasse();
  expect(c instanceof Miclasse).toBeTruthy();
  expect(c instanceof Abs).toBeTruthy();
});
