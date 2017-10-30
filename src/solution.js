// LEVEL 1

// tanulók névsora
// return []
const nameList = students => students.map(student => student.name);

// átment-e mindenki a teszten?
// return Boolean
const didEveryOnePass = students => students.every((student) => student.score >= 25);

// bukott diákok listája
// return []
const failedStudents = students => students.filter(student => student.score < 25);

// hányan kaptak jeles értékelést?
// return []
const studentsWithA = students => students.filter(student => student.score > 79).length;

// előrehozott érettségizők
// return []
const earlyGraduate = students => students.filter(student => student.age < 18);

// kapott-e valaki 10-nél kevesebb pontot?
// return Boolean
const isAnyoneBelow10 = students => students.some(student => student.score > 10);

// LEVEL 2

// tanulók átlagpontszáma
// return Number
const averageScore = students => {
  let sumScores = students.reduce((accumulator, student) => accumulator + student.score, 0);
  return sumScores / students.length;
};

// lány tanulók átlaga
// return Number
const averageFemaleScore = students => {
  let femaleStudentsScores = students
    .filter(student => student.sex === 'female')
    .map(femaleStudent => femaleStudent.score);

  let femaleSumScores = femaleStudentsScores.reduce((accumulator, currentValue) => accumulator + currentValue);
  return femaleSumScores / femaleStudentsScores.length;
};

// átlag felett teljesitők listája
// return []
const aboveAverageStudents = students => {
  let averageScoreForThisFuction = averageScore(students);
  return students
    .filter(student => student.score > averageScoreForThisFuction)
    .map(student => student.name);
};

// legtöbb pontszámot elért tanuló
// return {}
const bestStudent = students => {
  let maxScore = students
    .map(student => student.score)
    .reduce((a, b) => Math.max(a, b));
  return students.find(student => student.score === maxScore);
};

// legkevesebb pontszámot elért
// return {}
const worstStudent = students => {
  let minScore = students
      .map(student => student.score)
      .reduce((a, b) => Math.min(a, b));
  return students.find(student => student.score === minScore);
};

// LEVEL 3

// készits olyan függvényt amivel név alapján lehet tanulót kikeresni egy tömbből
// csak egy tanulóval térjen vissza a függvény
// return {}
const findByName = (students, name) => {
  return students.find(student => student.name === name);
};

// készits olyan függvényt amivel egy megadott pont intervallumban lévő diákokkal tér vissza
// pl.: 25-46 között
// return []
const findInScoreRange = (students, min, max) => {
  return students.filter(student => student.score <= max && student.score >= min);
};

// készits olyan függvényt amivel nem szerint lekérheted a tanulók listáját
// return []
const findBySex = (students, sex) => {
  return students.filter(student => student.sex === sex);
};

// készits olyan függvényt ami egy adott pont intervallumban visszatér a diákok átlagával
// return []
const getAverageinScoreRange = (students, min, max) => {
  let filteredScores = students
  .filter(student => student.score <= max && student.score >= min);
  return filteredScores.reduce((accumulator, student) => accumulator + student.score, 0) / filteredScores.length;
};

// készits olyan függvényt amivel egy megadott pont intervallumban
// es megadott nem szerint szüri a diákokat
// es a megadott tulajdonsagot (property) adja vissza
// pl.: 25-46 között, lányok, nev
const findPropInScoreRangeBySex = (students, min, max, sex) => {
  return students
    .filter(student => student.score <= max && student.score >= min)
    .filter(student => student.sex === sex)
    .map(student => student.name);
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
