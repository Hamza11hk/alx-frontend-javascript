export default function updateStudentGradeByCity(a, city, newGrades) {
  return a
    .filter(student => student.location === city)
    .map(student => {
      let grade = newGrades.find(g => g.studentId === student.id);
      return { ...student, grade: (grade && grade.grade) || 'N/A' };
    });
}
