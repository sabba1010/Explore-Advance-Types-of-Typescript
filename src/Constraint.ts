// const addStudentToCourse = <T extends 
// {id: number, name: string}>(studentInfo: T) => {
//     return {
//         course: "ABC",
//         ...studentInfo,
//     };
// };

// const student333 = {
//     hasWatch: true,
// };

// const result = addStudentToCourse(student333);
// console.log(result);

const addStudentToCourse = <T extends { id: number; name: string }>(studentInfo: T) => {
  return {
    course: "ABC",
    ...studentInfo,
  };
};

const student333 = {
  id: 101,
  name: "Rahim",
  hasWatch: true,
};

const result = addStudentToCourse(student333);
console.log(result);
