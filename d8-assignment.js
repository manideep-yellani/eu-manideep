let employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
];

// 1. declare array of employees & sort them in ascending order (empId)
const sortedByEmpId = [...employees].sort((a, b) => a.eId - b.eId);
console.log(sortedByEmpId);

// 2. declare array of employees & sort them in ascending order by name
const sortedByName = [...employees].sort((a, b) => a.name.localeCompare(b.name));
console.log(sortedByName);

// 3. declare array of employees & filter the employees whose sal>6000
const highSalaryEmployees = employees.filter(emp => emp.sal > 6000);
console.log(highSalaryEmployees);

// 4. declare array of employees & increase sal of every employee by 500
const employeesWithRaise = employees.map(emp => ({
    ...emp,
    sal: emp.sal + 500
}));
console.log(employeesWithRaise);

// 5. declare array of employees & add "comp:ibm" to every employee
const employeesWithCompany = employees.map(emp => ({
    ...emp,
    comp: 'ibm'
}));
console.log(employeesWithCompany);

// 6. convert array of letters to array of words
const inputArr = [
    'b', 'a', 'k', 'e', '',
    'c', 'a', 'k', 'e', '',
    'e', 'a', 't'
];

const words = inputArr.join('').split('').reduce((result, char) => {
    if (char === '') {
        result.push('');
    } else {
        if (result.length === 0) {
            result.push(char);
        } else {
            result[result.length - 1] += char;
        }
    }
    return result;
}, []).filter(word => word !== '');
console.log(words);

// 7. add Dept info for each employee
const employeesForDept = [
    { eId: 101, name: "sanjay", sal: 5000, gender: "male" },
    { eId: 104, name: "reena", sal: 8000, gender: "female" }
];

const departments = [
    { eId: 101, dept: "sales" },
    { eId: 104, dept: "marketing" }
];

const employeesWithDept = employeesForDept.map(emp => {
    const deptInfo = departments.find(dept => dept.eId === emp.eId);
    return {
        ...emp,
        dept: deptInfo ? deptInfo.dept : 'Not Assigned'
    };
});
console.log(employeesWithDept);

// 8. declare array of employees & groupBy employees-name
const employeesWithDuplicates = [
    ...employees,
    { eId: 106, name: 'sanjay', sal: 6000, gender: 'male' },
    { eId: 107, name: 'geeta', sal: 7500, gender: 'female' }
];

let group = {};

for (let i of employeesWithDuplicates) {
    if (!group[i.name]) {
        group[i.name] = [];
    }
    group[i.name].push(i);
}

console.log("question 8",group);

// 9. intersection of 2 number arrays
const array1 = [1, 2, 3, 4, 5, 6];
const array2 = [4, 5, 6, 7, 8, 9];
const intersection = array1.filter(num => array2.includes(num));
console.log(intersection);

// 10. WAP to print the occurance of each elements
const input = [10, 20, 30, 40, 50, 10, 30, 50];
const occurrences = input.reduce((count, num) => {
    count[num] = (count[num] || 0) + 1;
    return count;
}, {});
console.log(occurrences);