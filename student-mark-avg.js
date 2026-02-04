function analyzeMarks (marksObj){
let total = 0;
let highestMarks = -Infinity;
let lowestMarks = Infinity;
let highestSubject = null;
let lowestSubject = null;
for(let subject in marksObj){
  let marks = marksObj[subject]
  total += marks
  if(marks > highestMarks) {
      highestMarks = marks;
      highestSubject = subject;
    }
    if(marks < lowestMarks) {
      lowestMarks = marks;
      lowestSubject = subject;
    }
}
let marksArray = Object.keys(marksObj)
let average = total/marksArray.length
    return{
      total,
      average,
      highestSubject,
      lowestSubject,
      highestMarks,
      lowestMarks
    }
  }
let studentMarks = analyzeMarks({ 
  math: 78, 
  english: 65, 
  physics: 88, 
  bangla: 55 
})
console.log(studentMarks)