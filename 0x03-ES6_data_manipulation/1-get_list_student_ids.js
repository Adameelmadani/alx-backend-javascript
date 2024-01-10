export default function getListStudentIds(student_list) {
  if(Array.isArray(student_list)) {
    return student_list.map((student) => student.id);
  }
  return [];
}
