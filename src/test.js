const test = require('ava');
const students = require('./students');
const solution = require('./solution');

test.only('tanulók névsora', t => {
  const result = solution.nameList(students);

  t.is(result.length, 20);
  t.is(result[0], 'Tamás');
});

test.only('átment-e mindenki a teszten?', t => {
  const result = solution.didEveryOnePass(students);

  t.is(result, false);
});

test.only('bukott diákok listája', t => {
  const result = solution.failedStudents(students);

  t.is(result.length, 1);
});

test.only('hányan kaptak jeles értékelést?', t => {
  const result = solution.studentsWithA(students);

  t.is(result, 4);
});

test.only('előrehozott érettségizők', t => {
  const result = solution.earlyGraduate(students);

  t.is(result.length, 2);
});

test.only('kapott-e valaki 10-nél kevesebb pontot', t => {
  const result = solution.isAnyoneBelow10(students);

  t.is(result, true);
});

test.only('tanulók átlagpontszáma', t => {
  const result = solution.averageScore(students);

  t.is(result, 61.45);
});

test.only('lány tanulók átlaga', t => {
  const result = solution.averageFemaleScore(students);

  t.is(result, 54.1);
});

test.only('átlag felett teljesitők listája', t => {
  const result = solution.aboveAverageStudents(students);

  t.is(result.length, 12);
});

test.only('legjobb diák', t => {
  const result = solution.bestStudent(students);

  t.is(result.name, 'Endre');
});

test.only('legrosszabb diák', t => {
  const result = solution.worstStudent(students);

  t.is(result.name, 'Petra');
});

test('visszatér a keresett diákkal', t => {
  const result = solution.findByName(students, 'Pisti');

  t.is(result.name, 'Pisti');
});

test('diákok listája a megadott pontokszámok között', t => {
  const result = solution.findInScoreRange(students, 25, 46);

  t.is(result.length, 6);
});

test('diákok listázása nem alapján', t => {
  const result = solution.findBySex(students, 'male');

  t.is(result.length, 10);
});

test('diákok átlaga a megadott pontintervallumban', t => {
  const result = solution.getAverageinScoreRange(students, 25, 44);

  t.is(result, 36);
});

test('diákok listája megadott pontszámok között nem alapján', t => {
  const result = solution.findPropInScoreRangeBySex(students, 25, 46, 'female', 'name');

  t.is(result.length, 4);
  t.is(result[0], 'Klára');
});
