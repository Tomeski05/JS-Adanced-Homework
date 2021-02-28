// ## Exercise 1
// There is a JSON file with students. Make a call to the file and get the following data from it: 
// * All students with an average grade higher than 3
// * All female student names with an average grade of 5
// * All male student full names who live in Skopje and are over 18 years old
// * The average grades of all female students over the age  of 24
// * All male students with a name starting with B and average grade over 2

// Use higher order functions to find the answers
// **Link:** https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json






fetch (`https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json`)
.then (response => response.json())
.then (
    response => {

        // * All students with an average grade higher than 3
        let studentsWithAverageGrade3 = response.filter( student => student.averageGrade > 3 );
        //console.log(studentsWithAverageGrade3);
        

        // * All female student names with an average grade of 5
        let femaleStudentsAverageGrade5 = response
        .filter ( student => student.gender == "Female" )
        .filter ( student => student.averageGrade == 5 );
        //console.log(emaleStudentsAverageGrade5);

        let mapFemaleStudents = femaleStudentsAverageGrade5.map(student => {
            return {
                firstName: student.firstName,
                lastName: student.lastName,
                averageGrade: student.averageGrade
            };
        });
        //console.log(mapFemaleStudents);


        // * All male student full names who live in Skopje and are over 18 years old
        let maleStudentsSkopje = response
        .filter ( student => student.gender == "Male" )
        .filter ( student => student.city == "Skopje" )
        .filter ( student => student.age > 18 )
        //console.log(maleStudentsSkopje)



        // * The average grades of all female students over the age  of 24
        let femaleOver24AverageGrade = response
        .filter ( student => student.gender == "Female" )
        .filter ( student => student.age > 24 );
        //console.log(femaleOver24AverageGrade);

        ////////////////// BUBBE ////////////////////////
        femaleOver24AverageGrade.map (student => (
            console.log(`${student.firstName} ${student.lastName}:average grade (${student.averageGrade})`)
        ))


        // * All male students with a name starting with B and average grade over 2
        let maleNameBGradeOver2 = response 
        .filter ( student => student.firstName.startsWith ("B"))
        .filter ( student => student.gender == "Male" )
        .filter ( student => student.averageGrade > 2 );
        //console.log(maleNameBGradeOver2);

    })

    .catch ((error) => {
        console.error('Error:', error);
    })