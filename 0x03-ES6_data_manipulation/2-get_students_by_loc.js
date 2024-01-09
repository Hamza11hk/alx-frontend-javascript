export default function getStudentsByLocation(a, city) {
  return a.filter((student) => student.location === city);
}
