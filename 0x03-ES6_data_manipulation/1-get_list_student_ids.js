export default function getListStudentIds(a) {
  if (!Array.isArray(a)) {
    return [];
  }
  return a.map((student) => student.id);
}
