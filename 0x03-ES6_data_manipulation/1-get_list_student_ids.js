export default function getListStudentIds(student_list) {
  return student_list.map((student) => student.id);
}
