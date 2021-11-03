let employees = [{
  id: 1,
  name: 'Linux Torvalds'
}, {
  id: 2,
  name: 'Bill Gates'
},{
  id: 3,
  name: 'Jeff Bezos'
}];

let salaries = [{
  id: 1,
  salary: 4000
}, {
  id: 2,
  salary: 1000
}, {
  id: 3,
  salary: 2000
}];


/**
 * Nivell 1 Exercici 1
 */

let getEmployee = (id) => {
  return new Promise ((resolve, reject) => {
    let obj = employees.find(o => o.id === id);
    if (obj) resolve(obj);
    else reject(new Error("No existeix l'usuari"));
  });
}

let getSalary = (emp) => {
  return new Promise ((resolve, reject) => {
    let sal = salaries.find(o => o.id === emp.id).salary;
    if (sal) resolve(sal);
    else reject(new Error("No existeix l'empleat"));
  });
}

/**
 * Nivell 1 Exercici 2
 */

async function salaryEmp (id) {
  try {
    const emp = await getEmployee(id);
    const sal = await getSalary(emp);
    console.log(emp.name, sal);
  } catch (e) {
    console.log(e.message);
  }
}

/** Prova d'execució */ 
//console.log('Nivell 1 Exercici 2:');
//salaryEmp(2);


/**
 * Nivell 2 Exercici 1
 */

let getEmployee2 = (id) => {
  return new Promise ((resolve, reject) => {
    let obj = employees.find(o => o.id === id);
    if (obj)
      setTimeout(() => {
        resolve(obj);
      }, 2000);
    else reject(new Error("No existeix l'usuari"));
  });
}

async function salaryEmp2 (id) {
  let emp = await getEmployee2(id);
  console.log(emp.id, emp.name);
}

/** Prova d'execució */ 
//console.log('Nivell 2 Exercici 1:');
//salaryEmp2(3);


/**
 * Nivell 3 Exercici 1
 */

// Està fet als nivells 1 i 2

