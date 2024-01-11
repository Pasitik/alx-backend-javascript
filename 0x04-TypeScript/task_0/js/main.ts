/* Write an interface named Student that accepts the following elements: 
firstName(string), lastName(string), age(number), and location(string)
Create two students, and create an array named studentsList containing the two variables
Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
Each row should contain the first name of the student and the location
Requirements:

When running, Webpack should return No type errors found.
Every variable should use TypeScript when possible.*/
interface Student{
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    location: "New York"
}

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 30,
    location: "Los Angeles"
}

let studentsList: Array<Student> = [student1, student2];

//create body tag 
const body: HTMLBodyElement = document.getElementsByTagName("body")[0];

//create table tag
const table: HTMLTableElement = document.createElement("table");
//create thead, and tbody elements
const thead: HTMLTableSectionElement = document.createElement("thead");
const tbody: HTMLTableSectionElement = document.createElement("tbody");

const rowHead: HTMLTableRowElement = thead.insertRow(0);
const head1: HTMLTableCellElement = rowHead.insertCell(0);
const head2: HTMLTableCellElement = rowHead.insertCell(1);

head1.innerHTML = "First Name";
head2.innerHTML = "Last Name";

table.appendChild(thead);

studentsList.forEach((student)=> {
    const row: HTMLTableRowElement = tbody.insertRow();
    const cell1: HTMLTableCellElement = row.insertCell(0);
    const cell2: HTMLTableCellElement = row.insertCell(1);

    cell1.innerHTML = student.firstName;
    cell2.innerHTML = student.location;
});

table.appendChild(tbody);
body.appendChild(table);

