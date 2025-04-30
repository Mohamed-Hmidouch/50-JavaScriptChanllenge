import employees from "../employees.js";

// function calculateAverageAge(){
//     let totalAge=0;
//     let count = 0;
//     for (let i = 0; i < employees.length; i++) {
//         totalAge += employees[i].age;
//         count++;
//         const avgAge = totalAge/count;
//         return avgAge;
//     }
// }

// const avgAge = calculateAverageAge(employees);
// console.log(avgAge);

// function getHighestPaidEmployee(){
//     let max = 0;
//     let employeSalery=null;
//     for (let i = 0; i < employees.length; i++) {
//         if(employees[i].salary>max){
//             max = employees[i].salary;
//             employeSalery = employees[i];
//            }
//     }
//     return employeSalery;
// }

// const highestPaidEmployee = getHighestPaidEmployee(employees);
// console.log(highestPaidEmployee);

// function countEmployeesInDepartment(employees,department){
//     let count = 0;
//     for (let i = 0; i < employees.length; i++) {
//      if(employees[i].department == department){
//       count++;
//      }
//     }
//     return count;
// }

// const EmployeesInDepartment = countEmployeesInDepartment(employees,'Développement')
// console.log(EmployeesInDepartment);

// function getUniqueDepartments(){
//     let department = [];
//     for (let i = 0; i < employees.length; i++) {
//        if(!department.includes(employees[i].department)){
//         department.push(employees[i].department)
//        }
//     }
//     return department;
// }

// const uniqueDepartments = getUniqueDepartments(employees);
// console.log(uniqueDepartments)

// function hasEmployeesWithoutProjects() {
//   let status = null;
//   for (let i = 0; i < employees.length; i++) {
//     if (employees[i].projects == false) {
//       status = true;
//       break;
//     } else {
//       status = false;
//     }
//   }
//   return status;
// }

// const employeesWithoutProjects = hasEmployeesWithoutProjects(employees);
// console.log(employeesWithoutProjects);
