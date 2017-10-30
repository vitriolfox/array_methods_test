// LEVEL 1

// tanulók névsora
// return []
const nameList = function (students) {
  return students.map(function (student) { return student.name; });
};

// átment-e mindenki a teszten?
// return Boolean
const didEveryOnePass = function (students) {
  return students.every(function (student) { return student.score >= 25; });
};

// bukott diákok listája
// return []
const failedStudents = function (students) {
  return students.filter(function (student) { return student.score < 25; });
};

// hányan kaptak jeles értékelést?
// return []
const studentsWithA = function (students) {
  return students.filter(function (student) { return student.score > 79; }).length;
};

// előrehozott érettségizők
// return []
const earlyGraduate = function (students) {
  return students.filter(function (student) { return student.age < 18; });
};

// kapott-e valaki 10-nél kevesebb pontot?
// return Boolean
const isAnyoneBelow10 = function (students) {
  return students.some(function (student) { return student.score > 10; });
};

// LEVEL 2

// tanulók átlagpontszáma
// return Number
const averageScore = function (students) {
  let sumScores = students.reduce(function (accumulator, student) { return accumulator + student.score; }, 0);
  return sumScores / students.length;
};

// lány tanulók átlaga
// return Number
const averageFemaleScore = function (students) {
  let femaleStudentsScores = students
    .filter(function (student) { return student.sex === 'female'; })
    .map(function (femaleStudent) { return femaleStudent.score; });

  let femaleSumScores = femaleStudentsScores.reduce(function (accumulator, currentValue) { return accumulator + currentValue; });
  return femaleSumScores / femaleStudentsScores.length;
};

// átlag felett teljesitők listája
// return []
const aboveAverageStudents = function (students) {
  let averageScoreForThisFuction = averageScore(students);
  return students
    .filter(function (student) { return student.score > averageScoreForThisFuction; })
    .map(function (student) { return student.name; });
};

// legtöbb pontszámot elért tanuló
// return {}
const bestStudent = function (students) {
  let maxScore = students
    .map(function (student) { return student.score; })
    .reduce(function (a, b) { return Math.max(a, b); });
  return students.find(function (student) { return student.score === maxScore; });
};

// legkevesebb pontszámot elért
// return {}
const worstStudent = function (students) {
  let minScore = students
      .map(function (student) { return student.score; })
      .reduce(function (a, b) { return Math.min(a, b); });
  return students.find(function (student) { return student.score === minScore; });
};

// LEVEL 3

// készits olyan függvényt amivel név alapján lehet tanulót kikeresni egy tömbből
// csak egy tanulóval térjen vissza a függvény
// return {}
const findByName = function (students, name) {
  return students.find(function (student) { return student.name === name; });
};

// készits olyan függvényt amivel egy megadott pont intervallumban lévő diákokkal tér vissza
// pl.: 25-46 között
// return []
const findInScoreRange = function (students, min, max) {
  return students.filter(function (student) { return student.score <= max && student.score >= min; });
};

// készits olyan függvényt amivel nem szerint lekérheted a tanulók listáját
// return []
const findBySex = function (students, sex) {
  return students.filter(function (student) { return student.sex === sex; });
};

// készits olyan függvényt ami egy adott pont intervallumban visszatér a diákok átlagával
// return []
const getAverageinScoreRange = function (students, min, max) {
  let filteredScores = students
  .filter(function (student) { return student.score <= max && student.score >= min; });
  return filteredScores.reduce(function (accumulator, student) { return accumulator + student.score; }, 0) / filteredScores.length;
};

// készits olyan függvényt amivel egy megadott pont intervallumban
// es megadott nem szerint szüri a diákokat
// es a megadott tulajdonsagot (property) adja vissza
// pl.: 25-46 között, lányok, nev
const findPropInScoreRangeBySex = function (students, min, max, sex) {
  return students
    .filter(function (student) { return student.score <= max && student.score >= min; })
    .filter(function (student) { return student.sex === sex; })
    .map(function (student) { return student.name; });
};

module.exports = {
  nameList,
  didEveryOnePass,
  studentsWithA,
  failedStudents,
  earlyGraduate,
  isAnyoneBelow10,
  averageScore,
  averageFemaleScore,
  aboveAverageStudents,
  bestStudent,
  worstStudent,
  findByName,
  findInScoreRange,
  findBySex,
  getAverageinScoreRange,
  findPropInScoreRangeBySex
};
