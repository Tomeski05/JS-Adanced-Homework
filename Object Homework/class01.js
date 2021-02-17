// function Student(firstName, lastName, birthYear, academy, grades){
//     this.fName = firstName;
//     this.lName = lastName;
//     this.birthYear = birthYear;
//     this.academy = academy;
//     this.grades = grades;

//     this.getAge = function() {
//         let todayYear = new Date().getFullYear();
//         return `The student ${this.fName} ${this.lName} is ${todayYear - this.birthYear} years old.`;
//     }

//     this.getInfo = function() {
//         return `Student ${this.fName} ${this.lName} is from the academy ${this.academy}.`;
//     }

//     this.getGradesAverage = function() {
//         return `His average grade is ${(this.grades[0] + this.grades[1] + this.grades[2] + this.grades[3] +this.grades[4]) / 5}.`
//     }

//     this.arrayInfo = function() {
//         return ` ${this.fName} ${this.lName}`;
// }
// }

// let studentArray = [];

// let studentOne = new Student("Filip", "Tomeski", 1995, "SEDC", [7, 6, 7, 8, 9]);
// console.log (studentOne.getAge(), studentOne.getInfo(), studentOne.getGradesAverage());

// let studentTwo = new Student("Ivan", "Ivanov", 1995, "SEDC", [8, 7, 6, 9, 9]);
// console.log (studentTwo.getAge(), studentTwo.getInfo(), studentTwo.getGradesAverage());

// let studentThree = new Student("Jovan", "Jovanov", 1995, "SEDC", [7, 10, 8, 9, 7]);
// console.log (studentThree.getAge(), studentThree.getInfo(), studentThree.getGradesAverage());

// studentArray.push(studentOne.arrayInfo());
// studentArray.push(studentTwo.arrayInfo());
// studentArray.push(studentThree.arrayInfo());

// console.log(studentArray);


function SignUp (fName, lName, bYear, studentAcademy){
    this. firstNameStudent = fName;
    this. lastNameStudent = lName;
    this. birthYearStudent = bYear;
    this. academy = studentAcademy;
}



let signupArray = [];
let fNameInput = document.getElementById("fNameStudent");
let lNameInput = document.getElementById("lNameStudent");
let birthYearInput = document.getElementById("bYearStudent");
let academyInput = document.getElementById("academy")
let signBtn = document.getElementById("btn");

function clearForm() {
    fNameInput.value="";
    lNameInput.value="";
    birthYearInput.value="";
    academyInput.value="";

}

signBtn.addEventListener("click", function(){
    let fNameStudent = fNameInput.value;
    let lNameStudent = lNameInput.value;
    let bYearStudent = birthYearInput.value;
    let academy = academyInput.value;

    if(!fNameStudent || !lNameStudent || !bYearStudent || !academy){
                console.log("Please enter valid values");
            } 
            else {
                let student = new SignUp(fNameStudent, lNameStudent, bYearStudent, academy);
                signupArray.push(student);
                console.log(student);}
    clearForm();
})