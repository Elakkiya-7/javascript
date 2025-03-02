
const students = [
    { name: "ely", age: 20, marks: 85 },
    { name: "jeeva", age: 22, marks: 78 },
    { name: "jana", age: 19, marks: 92 },
    { name: "harini", age: 21, marks: 88 },
    { name: "priya", age: 20, marks: 76 }
];
const highScorers = students.filter(student => student.marks > 80);
console.log("Students who scored above 80:", highScorers);
const sortedByAge = students.slice().sort((a, b) => a.age - b.age);
console.log("Students sorted by age:", sortedByAge);
const studentNames = students.map(student => student.name);
console.log("Student Names:", studentNames);