const { getEmployee, getSalary } = require('../app/Promises');

describe("Promises - N2_Ex3", () => {

  test('obtenir objecte a partir del seu id', () => {
    const employees = [
      {id: 1, name: 'Linux Torvalds'}, 
      {id: 2, name: 'Bill Gates'},
      {id: 3, name: 'Jeff Bezos'}
    ];
    expect(getEmployee(1)).resolves.toStrictEqual({id: 1, name: 'Linux Torvalds'});
  });

  test('obtenir Salary a partir del objecte Employee', () => {
    const salaries = [
      {id: 1, salary: 4000},
      {id: 2, salary: 1000},
      {id: 3, salary: 2000}
    ];
    expect(getSalary({id: 3, name: 'Jeff Bezos'})).resolves.toBe(2000);
  });

  test('obtenir Salary a partir del objecte Employee', () => {
    const salaries = [
      {id: 1, salary: 4000},
      {id: 2, salary: 1000},
      {id: 3, salary: 2000}
    ];
    expect(getSalary().rejects);
  });


});
