const studentName = "Mphatso Kenani";
let year = 4;
const isEnrolled = true;
console.log("Name:", studentName);
console.log("Year:", year);
console.log("Type of year:", typeof year);
console.log(`${studentName} is in year ${year}`);
let cgpa = 3.75;
console.log(`CGPA rounded: ${Math.round(cgpa)}`);
console.log(`CGPA fixed: ${cgpa.toFixed(1)}`);

function gradeToLetter(score) {
  if (score >= 70) return "A";
  if (score >= 60) return "B";
  if (score >= 50) return "C";
  if (score >= 40) return "D";
  return "F";
}
console.log(gradeToLetter(85));
console.log(gradeToLetter(52)); 
 

const double = (n) => n * 2;
console.log(double(7)); // 14
 
const welcome = (name = "Student") => `Welcome to IWS, ${name}!`;
console.log(welcome());        // uses default
console.log(welcome("Chiku")); // uses "Chiku"
 