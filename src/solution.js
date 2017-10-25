// LEVEL 1

// tanulók névsora
// return []
const nameList = function (students) {};

// átment-e mindenki a teszten?
// return Boolean
const didEveryOnePass = function (students) {};

// bukott diákok listája
// return []
const failedStudents = function (students) {};

// hányan kaptak jeles értékelést?
// return []
const studentsWithA = function (students) {};

// előrehozott érettségizők
// return []
const earlyGraduate = function (students) {};

// LEVEL 2

// tanulók átlagpontszáma
// return Number
const averageScore = function (students) {};

// lány tanulók átlaga
// return Number
const averageFemaleScore = function (students) {};

// átlag felett teljesitők listája
// return []
const aboveAverageStudents = function (students) {};

// legtöbb pontszámot elért tanuló
// return {}
const bestStudent = function (students) {};

// legkevesebb pontszámot elért
// return {}
const worstStudent = function (students) {};

// LEVEL 3

// készits olyan függvényt amivel név alapján lehet tanulót kikeresni egy tömbből
// csak egy tanulóval térjen vissza a függvény
// return {}
const findByName = function (students, name) {};

// készits olyan függvényt amivel egy megadott pont intervallumban lévő diákokkal tér vissza
// pl.: 25-46 között
// return []
const findInScoreRange = function (students, min, max) {};

// készits olyan függvényt amivel nem szerint lekérheted a tanulók listáját
// return []
const findBySex = function (students, sex) {};

module.exports = {
  nameList,
  didEveryOnePass,
  studentsWithA,
  failedStudents,
  earlyGraduate,
  averageScore,
  averageFemaleScore,
  aboveAverageStudents,
  bestStudent,
  worstStudent,
  findByName,
  findInScoreRange,
  findBySex
};
