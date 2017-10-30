// LEVEL 1

// tanulók névsora
// return []
const nameList = (students) => {
  return students.map((student) => { return student.name; });
};

// átment-e mindenki a teszten?
// return Boolean
const didEveryOnePass = (students) => {
  return students.every((student) => { return student.score >= 25; });
};

// bukott diákok listája
// return []
const failedStudents = (students) => {
  return students.filter((student) => { return student.score < 25; });
};

// hányan kaptak jeles értékelést?
// return []
const studentsWithA = (students) => {
  return students.filter((student) => { return student.score > 79; }).length;
};

// előrehozott érettségizők
// return []
const earlyGraduate = (students) => {
  return students.filter((student) => { return student.age < 18; });
};

// kapott-e valaki 10-nél kevesebb pontot?
// return Boolean
const isAnyoneBelow10 = (students) => {
  return students.some((student) => { return student.score > 10; });
};

// LEVEL 2

// tanulók átlagpontszáma
// return Number
const averageScore = (students) => {
  let sumScores = students.reduce((accumulator, student) => { return accumulator + student.score; }, 0);
  return sumScores / students.length;
};

// lány tanulók átlaga
// return Number
const averageFemaleScore = (students) => {
  let femaleStudentsScores = students
    .filter((student) => { return student.sex === 'female'; })
    .map((femaleStudent) => { return femaleStudent.score; });

  let femaleSumScores = femaleStudentsScores.reduce((accumulator, currentValue) => { return accumulator + currentValue; });
  return femaleSumScores / femaleStudentsScores.length;
};

// átlag felett teljesitők listája
// return []
const aboveAverageStudents = (students) => {
  let averageScoreForThisFuction = averageScore(students);
  return students
    .filter((student) => { return student.score > averageScoreForThisFuction; })
    .map((student) => { return student.name; });
};

// legtöbb pontszámot elért tanuló
// return {}
const bestStudent = (students) => {
  let maxScore = students
    .map((student) => { return student.score; })
    .reduce((a, b) => { return Math.max(a, b); });
  return students.find((student) => { return student.score === maxScore; });
};

// legkevesebb pontszámot elért
// return {}
const worstStudent = (students) => {
  let minScore = students
      .map((student) => { return student.score; })
      .reduce((a, b) => { return Math.min(a, b); });
  return students.find((student) => { return student.score === minScore; });
};

// LEVEL 3

// készits olyan függvényt amivel név alapján lehet tanulót kikeresni egy tömbből
// csak egy tanulóval térjen vissza a függvény
// return {}
const findByName = (students, name) => {
  return students.find((student) => { return student.name === name; });
};

// készits olyan függvényt amivel egy megadott pont intervallumban lévő diákokkal tér vissza
// pl.: 25-46 között
// return []
const findInScoreRange = (students, min, max) => {
  return students.filter((student) => { return student.score <= max && student.score >= min; });
};

// készits olyan függvényt amivel nem szerint lekérheted a tanulók listáját
// return []
const findBySex = (students, sex) => {
  return students.filter((student) => { return student.sex === sex; });
};

// készits olyan függvényt ami egy adott pont intervallumban visszatér a diákok átlagával
// return []
const getAverageinScoreRange = (students, min, max) => {
  let filteredScores = students
  .filter((student) => { return student.score <= max && student.score >= min; });
  return filteredScores.reduce((accumulator, student) => { return accumulator + student.score; }, 0) / filteredScores.length;
};

// készits olyan függvényt amivel egy megadott pont intervallumban
// es megadott nem szerint szüri a diákokat
// es a megadott tulajdonsagot (property) adja vissza
// pl.: 25-46 között, lányok, nev
const findPropInScoreRangeBySex = (students, min, max, sex) => {
  return students
    .filter((student) => { return student.score <= max && student.score >= min; })
    .filter((student) => { return student.sex === sex; })
    .map((student) => { return student.name; });
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
