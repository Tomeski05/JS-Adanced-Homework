//Make 3 functions:
// 1. Function that takes a number through a parameter and returns how many digits that number has

function digit (a) {
    let counter = 0;
    while (a > 0) {
        a = parseInt (a/10);
        counter = counter + 1
    }
    console.log (counter);
}

digit(230086);

// 2. Function that takes a number through a parameter and returns if its even or odd

    function oddOrEven (m) {
        if(m % 2 == 0) {
            console.log("Even Numbers")
        }
        else {
            console.log("Odd numbers")
        }
    }

    oddOrEven(10)

// 3. Function that takes a number through a parameter and returns if its positive or negative

    function posOrNeg(n) {
        if (n > 0) {
            console.log("positive")
        }
        else if (n < 0) {
            console.log("negative")
        }
        else {
            console.log("0")
        }
    }

    function enterNum(d) {
        digit (d);
        oddOrEven (d);
        posOrNeg (d);
    }

    enterNum (5)
// Create a function that takes a number through a parameter and calls all three functions for the number that was passed. 
// It should show the results in the console.




//1. First arrow function will accept two parameters, one for element and one for color.
//The function should change the given element text color with the color given from the  second color parameter.If no parameter is passed for color, the default value is *black*.

let colorChange = (element, colorInput) => {
    if (colorInput !== "")
    {
        element.style.color = `${colorInput}`
    }
    else {
        element.style.color = "black"
    }
}


// 2. Second arrow function will accept two parameters, one for element and one for textSize.
// The function should change the given element text size to the number given from the second  textSize parameter.
// If no parameter is passed for textSize, the default value is 24.


let fontSizeChange = (element, fontSize) => {
    if (fontSize !== "") 
    {
        element.style.fontSize = `${fontSize}px`
    }
    else {
        element.style.fontSize = "45px"
    }
}


//Create an HTML document with two inputs, a button and an h1 header with some text.
// The first input should be for text size and the second for color.When the button is clicked the h1 header should change according to the input values 
// ( change size as the first input value and color as the second input value ).
// Use the functions that we declared earlier and use arrow function for the event listener of the button.

let button = document.getElementById("submitBtn")
let color = document.getElementById("colorInput")
let font = document.getElementById("fontSize")
let header = document.getElementById("element1")

button.addEventListener("click", () => {
    colorChange(header, color.value);
    fontSizeChange(header, font.value);

})