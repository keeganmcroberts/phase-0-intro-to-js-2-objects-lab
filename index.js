// Write your solution in this file!
const employee = {
    name: "Keegan",
    streetAdress: "100 street",
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    console.log(employee, key, value)
    const newObj = {...employee};
    newObj[key] = value;
   
 
    return newObj;
    }
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    console.log(employee, key, value)
    employee[key] = value;
    console.log(employee);
    return employee;
    }

function deleteFromEmployeeByKey(employee, key){
    console.log(employee, key);
    const newEmployee = {...employee}
    delete newEmployee[key];
    
    return newEmployee;
    
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    console.log(employee, key);
    delete employee[key];
    return employee;
    
}
