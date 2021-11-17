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

let obj = {
  id: 1,
  name: 'Linux Torvalds'
}

let getSalary = (emp) => {
  return new Promise ((resolve, reject) => {
    try {
      let sal = salaries.find(o => o.id === emp.id).salary;
      if (sal) resolve(sal);
    } finally {
      reject('Problemes ...');
    }
  });
}

getSalary(obj)
  .then(res=>console.log(res))
  .catch(rej => {
    console.log(rej);
  });

getSalary(undefined)
  .then(res=>console.log(res))
  .catch(rej => {
    console.log(rej);
  });

