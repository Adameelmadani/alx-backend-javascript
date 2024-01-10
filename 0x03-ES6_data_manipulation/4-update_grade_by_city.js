export default function updateStudentGradeByCity(slist, city, newGrades) {
  return slist.map((student) => {
    let a = 0;
    for (const elem of newGrades) {
      if (elem.studentId === student.id) {
        student.grade = elem.grade;
        a = 1;
      }
    }
    if (a == 0) {
      student.grade = 'N/A';
    }
  }).filter((student) => student.location === city);
}
