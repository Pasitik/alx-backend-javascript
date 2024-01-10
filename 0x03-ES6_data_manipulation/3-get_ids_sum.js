/* Create a function getStudentIdsSum that returns the sum of all the student ids.

It should accept a list of students (from getListStudents) as a parameter.

You must use the reduce function on the array. */
import getListStudentIds from './1-get_list_student_ids';

const getStudentIdsSum = (students) => {
  const studentsIDs = getListStudentIds(students);
  const sum = studentsIDs.reduce((acc, cv) => acc + cv, 0);
  return sum;
};

export default getStudentIdsSum;
