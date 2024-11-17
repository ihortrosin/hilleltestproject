// - 9.1

let company = {
    sales: [
        { name: 'John', salary: 1000 },
        { name: 'Alice', salary: 600 }
    ],
    development: {
        web: [
            { name: 'Peter', salary: 2000 },
            { name: 'Alex', salary: 1800 },
            { name: 'Ihor', salary: 6000 }
        ],
        internals: [
            { name: 'Jack', salary: 1300 }

        ]
    }
};
function sumSalaries(department) {
    let totalSalary = 0;

    Object.values(department).forEach(departmentContent => {

        if (Array.isArray(departmentContent)) {
            departmentContent.forEach(employee => {
                totalSalary += employee.salary;
            });
        }
        else if (typeof departmentContent === 'object') {
            totalSalary += sumSalaries(departmentContent);
        }
    });
    return totalSalary;
}
console.log(sumSalaries(company)); // Виведе: 9600