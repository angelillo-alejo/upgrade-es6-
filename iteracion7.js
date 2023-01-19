/*7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de 
los alumnos usando la función .reduce().*/

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}

    // (otra forma de hacerlo vista en algun lado de internet)
];
    const totalScore = exams.reduce((count, exam) => count + exam.score, 0); 
    console.log(totalScore);

     const totalScore1 = exams.reduce(function (count, exam) { 
     return count + exam.score;}, 0);
     console.log(totalScore1);
    
    
/*7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los 
alumnos que esten aprobados usando la función .reduce().*/
    const totalScore2 = exams.reduce((accumulator, exam) => {
        if (exam.score > 5) {
          return accumulator + exam.score;
        } else {
          return accumulator;
        }
      }, 0);
    
      console.log(totalScore2)

// 7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce().
const mediaExams = exams.reduce(
    (accumulator, exam) => accumulator + exam.score,
    0
  );
  const media = mediaExams / exams.length;
  console.log(mediaExams);