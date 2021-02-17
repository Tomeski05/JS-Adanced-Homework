$(document).ready(function() {

    $("button").click(function() {
        fetch ("https://swapi.dev/api/people/1/")
        .then (function (response) {
            return response.json();
        })
        
        .then (function(data) {
            $("#dataStarWars").html 

            (`<h1>${data.name}</h1>
            <table border = #A52A2A, "2px">
            <tr>
                <td>Height</td>
                <td>Weight</td>
                <td>Eye color</td>
                <td>Hair color</td>
            </tr>

            <tr>
                <td>${data.height}</td>
                <td>${data.weight}</td>
                <td>${data.eye_color}</td>
                <td>${data.hair_color}</td>
            </tr>
            </table>`);

        }).catch (function (error) {
            alert("not valid");
        })
    })
})