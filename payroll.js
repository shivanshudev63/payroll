class Node {
    constructor(employeeName, department, netPay) {
        this.employeeName = employeeName;
        this.department = department;
        this.netPay = netPay;
        this.next = null;
    }
}

class EmployeeList {
    constructor() {
        this.head = null;
    }

    // Add an employee to the end of the list
    addEmployee(employeeName, department, netPay) {
        const newNode = new Node(employeeName, department, netPay);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Display the list of employees
    displayEmployees() {
        if (this.head === null) {
            console.log("No employees to display.");
            return;
        }

        console.log("Employee List:");
        let current = this.head;
        while (current !== null) {
            console.log(`Name: ${current.employeeName}, Department: ${current.department}, Net Pay: $${current.netPay.toFixed(2)}`);
            current = current.next;
        }
    }
}

const employeeList = new EmployeeList();

employeeList.addEmployee("Alice Smith", "Engineering", 75000.00);
employeeList.addEmployee("Bob Johnson", "Marketing", 62000.00);
employeeList.addEmployee("Charlie Brown", "Sales", 55000.00);
employeeList.addEmployee("Diana Prince", "Human Resources", 68000.00);
employeeList.addEmployee("Evan Davis", "Finance", 72000.00);

employeeList.displayEmployees();
console.log("everything works");
