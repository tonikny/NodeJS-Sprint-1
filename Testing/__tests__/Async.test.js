const { getEmployee, getSalary, salaryEmp, getEmployee2, salaryEmp2 } = require('../app/Async');

describe("Async - N1_Ex1", () => {

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

  // He fet aquesta del N1_Ex2, que no està a l'enunciat ...
  /*
  test('console.log the salary', async () => {
    const employees = [
      {id: 1, name: 'Linux Torvalds'}, 
      {id: 2, name: 'Bill Gates'},
      {id: 3, name: 'Jeff Bezos'}
    ];
    const salaries = [
      {id: 1, salary: 4000},
      {id: 2, salary: 1000},
      {id: 3, salary: 2000}
    ];
    console.log = jest.fn();
    await salaryEmp(2);
    expect(console.log).toHaveBeenCalledWith('Bill Gates', 1000);
  });
  */
});


describe("Async - N2_Ex1", () => {

  test('obtenir objecte a partir del seu id', () => {
    const employees = [
      {id: 1, name: 'Linux Torvalds'}, 
      {id: 2, name: 'Bill Gates'},
      {id: 3, name: 'Jeff Bezos'}
    ];
    expect(getEmployee2(1)).resolves.toStrictEqual({id: 1, name: 'Linux Torvalds'});
  });

  test('obtenir Employee amb retard', async () => {
    const employees = [
      {id: 1, name: 'Linux Torvalds'}, 
      {id: 2, name: 'Bill Gates'},
      {id: 3, name: 'Jeff Bezos'}
    ];
    console.log = jest.fn();
    await salaryEmp2(2);
    expect(console.log).toHaveBeenCalledWith(2, 'Bill Gates');
  });

});

