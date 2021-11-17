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

let getEmployee = (id) => {
  return new Promise ((resolve, reject) => {
    try {
      let obj = employees.find(o => o.id === id);
    if (obj) resolve(obj);
  } finally {
    reject('Problemes getEmployee ...');
  }
  });
}


let getSalary = (emp) => {
  return new Promise ((resolve, reject) => {
    try {
      let sal = salaries.find(o => o.id === emp.id).salary;
    if (sal) resolve(sal);
  } finally {
    reject('Problemes getSalary ...');
  }
  });
}

getEmployee(1)
  .then(res=> {
    console.log(res);
    getSalary(res)
      .then(res=>console.log(res))
      .catch(rej => {
        console.log(rej);
      });
  })
  .catch(rej => {
    console.log(rej);
  });
  
  getEmployee(4)
  .then(res=> {
    console.log(res);
    getSalary(res)
      .then(res=>console.log(res))
      .catch(rej => {
        console.log(rej);
      });
  })
  .catch(rej => {
    console.log(rej);
  });