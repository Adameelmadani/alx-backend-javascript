interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Adam",
  lastName: "Elmadani",
  age: 19,
  location: "Fes",
}

const student2: Student = {
  firstName: "Ahmed",
  lastName: "Elmeknasi",
  age: 20,
  location: "Meknes",
}

const studentsList: Student[] = [student1, student2];
const table: string[][] = [
  [student1.firstName, student1.location],
  [student2.firstName, student2.location]
];

let i: number;
for (i = 0; i < 2; i++) {
  console.log(table[i][0] + " " + table[i][1]);
}
