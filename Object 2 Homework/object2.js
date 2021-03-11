// ## Exercise 1
// Create a Person constructor function that has:
// * firstName
// * lastName
// * age
// * getFullName - method
// Create a Student constructor function that inherits from Person and has:
// * academyName
// * studentId
// * study - method that writes in the console: The student firstName is studying in the academyName

// Create two Student objects

function Person (firstName, lastName, age)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.getFullName = function ()
    {
        console.log(`${this.firstName} ${this.lastName}`);
    }
};

function Student (firstName, lastName, age, academyName, studentId)
{
    Object.setPrototypeOf(this, new Person(firstName, lastName, age));

    this.academyName = academyName;
    this.studentId = studentId;

    this.study = function ()
    {
        console.log(`The student ${this.firstName} is studying in ${this.academyName}`)
    }
};

let student1 = new Student ("Filip", "Tomeski", 26, "SEDC", 05)
let student2 = new Student ("Hristijan", "Tomeski", 21, "SEDC", 06)

// console.log(student1);
// console.log(student2);
// student1.study();
// student2.study();


// ## Exercise 2
// Create a method on the Student prototype that accepts a Student of any academy and returns the academy that that student is in.

// Create DesignStudent, CodeStudent and NetworkStudent constructor functions that inherit from Student.
// #### DesignStudent
// * isStudentOfTheMonth - boolean
// * attendAdobeExam - method that writes in console: The student firstName is doing an adobe exam!

// #### CodeStudent
// * hasIndividualProject - boolean
// * hasGroupProject - boolean
// * doProject(type) - method that accepts string. If the string is individual or group it should write that the person is working on the project of that type and set the value to true on the property of the project

// #### NetworkStudent
// * academyPart - number
// * attendCiscoExam - method that writes in console: the student firstNAme is doing a cisco exam!

// **Note:** For all students, the academyName property should be auto generated based on which Student we are creating ( design, code or network )

// Create one of each students
// Check all students with the Student method for checking students academy


function NetworkStudent (firstName, lastName, age, academyName, studentId, academyPart)
{
    this.academyPart = academyPart;
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, academyName, studentId))
    this.attendCiscoExam = () => console.log(`This student ${firstName} is doing a cisco exam!`)
}

function DesignStudent (firstName, lastName, age, academyName, studentId, isStudentOfTheMonth)
{
    this.isStudentOfTheMonth = isStudentOfTheMonth;
    Object.setPrototypeOf (this, new Student(firstName, lastName, age, academyName, studentId))
    this.attendAdobeExam = () =>
    {
        console.log(`The student ${firstName} is doing an adobe exam!`)
    }
}

function CodeStudent (firstName, lastName, age, academyName, studentId, type)
{
    this.hasIndividualProject = type === "individual"
    this.hasGroupProject = type === "group"

    Object.setPrototypeOf (this, new Student (firstName, lastName, age, academyName, studentId))
    this.doProject = (type) =>
    {
        switch (type)
        {
            case "group":
                this.hasGroupProject = true;
                console.log(`Group Project`)
                break;
            case "individual":
                this.hasIndividualProject = true;
                break;
            default:
                console.log(`Student has no project assigned`)
                break;
        }
    }
}

let Filip = new CodeStudent ("Fiip", "Tomeski", 26, "SEDC", 10, "individual");
console.log(Filip)
let Hristijan = new Student ("Hristijan", "Tomeski", 21, "SEDC", 16);
console.log(Hristijan)