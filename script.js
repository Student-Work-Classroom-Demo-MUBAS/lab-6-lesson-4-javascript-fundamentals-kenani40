// // ============================================
// // STEP 1: Variables, types, and the console
// // ============================================

// const studentName = "Mphatso Kenani";
// let year = 4;
// const isEnrolled = true;

// console.log("Name:", studentName);
// console.log("Year:", year);
// console.log("Type of year:", typeof year);

// // Template literals — much easier than + concatenation
// console.log(`${studentName} is in year ${year}`);

// // Maths
// let cgpa = 3.75;
// console.log(`CGPA rounded: ${Math.round(cgpa)}`);
// console.log(`CGPA fixed: ${cgpa.toFixed(1)}`);


// // ============================================
// // STEP 2: Functions
// // ============================================

// // Function declaration
// function gradeToLetter(score) {
//   if (score >= 70) return "A";
//   if (score >= 60) return "B";
//   if (score >= 50) return "C";
//   if (score >= 40) return "D";
//   return "F";
// }
// console.log(gradeToLetter(85)); // "A"
// console.log(gradeToLetter(52)); // "C"

// // Arrow function version — same thing, shorter syntax
// const double = (n) => n * 2;
// console.log(double(7)); // 14

// // Function with default parameter
// const welcome = (name = "Student") => `Welcome to IWS, ${name}!`;
// console.log(welcome());        // uses default
// console.log(welcome("Chiku")); // uses "Chiku"


// // ============================================
// // STEP 3: Arrays and objects
// // ============================================

// // Arrays
// const modules = ["IWS", "EMS", "ISE", "DSP", "Power Systems"];
// console.log(modules[0]);      // "IWS"
// console.log(modules.length);  // 5

// // Looping with forEach
// modules.forEach((mod) => {
//   console.log(`Module: ${mod}`);
// });

// // Array methods
// const webModules = modules.filter((m) => m === "IWS");
// const upperModules = modules.map((m) => m.toUpperCase());
// console.log("Filtered (webModules):", webModules);
// console.log("Mapped (upperModules):", upperModules);

// // Objects
// const student = {
//   name: "Mphatso Kenani",
//   id: "BECE/21/SS/009",
//   year: 4,
//   modules: modules,
//   greet: function () {
//     return `Hi, I am ${this.name}`;
//   }
// };
// console.log(student.name);
// console.log(student["id"]); // bracket notation also works
// console.log(student.greet());

// function temperatureConverter(value, unit) {
//   if (unit === "C") {
//     return (value * 9 / 5) + 32; // Celsius to Fahrenheit
//   }
//   if (unit === "F") {
//     return (value - 32) * 5 / 9; // Fahrenheit to Celsius
//   }
//   return undefined; // unrecognised unit
// }
 
// console.log(temperatureConverter(0, "C"));   // 32
// console.log(temperatureConverter(100, "C")); // 212
// console.log(temperatureConverter(32, "F")); 

const students = [
  { name: "Chiku", score: 78, year: 2 },
  { name: "Thoko", score: 45, year: 3 },
  { name: "Blessings", score: 61, year: 1 },
  { name: "Tadala", score: 39, year: 4 },
  { name: "Nchimunya", score: 50, year: 2 }
];
 
function getPassingStudents(list) {
  return list.filter((s) => s.score >= 50);
}
 
console.log(getPassingStudents(students));