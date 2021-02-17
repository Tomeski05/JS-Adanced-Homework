$(document).ready(function(){

    let buttonUser = $("#submitBtn");
    
    let textSize = $("#fontSizeUser");
    let colorUser = $("#colorInputUser");
    let textUser = $("#textInputUser");
   
    buttonUser.click(function () {

        if ((!textUser.val()) && (!colorUser.val()) && (!textSize.val())) {

            buttonUser.text('Enter text, color and font size.')

        } 
        
        else {
            buttonUser.after(`<h2>${textUser.val()}</h2>`)
            let paragraph = $("h2")
            paragraph.css("color", `${colorUser.val()}`);
            paragraph.css("fontSize", `${textSize.val()}px`);
            
        }

    })

})

// $(document).ready(function () {

// $("#submitBtn").click (function (){
//     let userColorInput = $("#colorList").val();
//     let userTextInput = $("#text").val();
//     let userFontSizeInput = $("#fontSize");
//     let validateText = (userTextInput.length > 0)

// if ( (validateText === true)){
//     $("#formList").append (`<ul id="newUl"></ul>`);
//     let words = userTextInput.split(",");
//    for ( let i = 0; i < words.length; i++ )
// {
//     $("#newUl").append (`<li> ${words[i]} </li>`);
//     let color = $("li");
//     color.css ("color",userColorInput); 
//     color.css ("fontSize", `${ userFontSizeInput.val()}px`); 
    
// }

// }

// })
// })
