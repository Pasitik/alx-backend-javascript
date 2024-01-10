/* Create a function getStudentsByLocation that returns an
array of objects who are located in a specific city.

It should accept a list of students (from getListStudents) and a city (string) as parameters.

You must use the filter function on the array. */

const getStudentsByLocation = (students, city) => {
  const newArr = students.filter((student) => student.location === city);
  return newArr;
};

export default getStudentsByLocation;
