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
  return new Promise ((resolv, reject) => {
    let obj = employees.find(o => o.id === id);
    if (obj) resolv(obj);
    else reject(new Error('ERROR_EMP'));
  });
}


let getSalary = (emp) => {
  return new Promise ((resolv, reject) => {
    let sal = salaries.find(o => o.id === emp.id).salary;
    if (sal) resolv(sal);
    else reject(new Error('ERROR_SAL'));
  });
}

getEmployee()
  .then(res=> {
    console.log(res);
    if (res) {
      getSalary(res)
        .then(res=>console.log(res))
        .catch (err=>{
          console.error(err.message);
        })
    }
  })
  .catch (err=>{
    console.error(err.message);
  })

  module.exports = { getEmployee, getSalary};
