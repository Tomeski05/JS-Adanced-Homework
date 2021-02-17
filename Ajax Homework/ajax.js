$(document).ready(function() {

    function printStudents(data) {
        let h1Element = $(`<h1></h1>`).text(`${data.academy}`);
        let uList = $(`<ul></ul>`);
        let responseStudents = data.students;
        $("body").append(h1Element, uList);
        for (i = 0; i < responseStudents.length; i++) {
            uList.append(`<li> ${responseStudents[i]}</li>`);
        }
    }
    
    $("#button").click(function () {
        
            fetch ("https://raw.githubusercontent.com/Drakso/AJS2019/master/Class1/students.json")
            .then (function (response) {
                return response.json();
            })
            .then (function (data) {
                printStudents(data);
                
            },).catch (function (error) {
                alert("USer not found");
            })
        })
    })