export default function getListStudentIds(student_list) {
  if (Array.isArray(student_list)) {
    return student_list.map((const student) => student.id);
  }
  return [];
}
