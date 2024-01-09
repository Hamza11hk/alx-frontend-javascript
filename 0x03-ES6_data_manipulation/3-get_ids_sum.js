export default function getStudentIdsSum(a) {
  return a.reduce((ac, student) => ac + student.id, 0);
}
