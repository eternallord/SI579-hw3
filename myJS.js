/*
* Excercise 1
*
*/

let block = document.querySelector('#color-block');
block.addEventListener('click', changeColor);


/*
* Then write a function that changes the text and the color inside the div
*
*/
function changeColor(){
    //Write a condition determine what color it should be changed to
    let color = document.querySelector('#color-name').innerText;
    if(color == '#F08080'){
        //change the background color using JS
        //Change the text of the color using the span id color-name
        block.style.backgroundColor  = '#81a8ca';
        document.querySelector('#color-name').innerText = '#81a8ca';

    }
    else{
        //change the background color using JS
        //Change the text of the color using the span id color-name
        block.style.backgroundColor  = '#F08080';
        document.querySelector('#color-name').innerText = '#F08080';

    }
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/
let btn = document.querySelector('#convertbtn');
btn.addEventListener('click', convertTemp);

/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(){
    //Calculate the temperature here
    let Fahrenheit = document.querySelector('#f-input').value;
    console.log(Fahrenheit);
    let Celsius = (Fahrenheit - 32) * 5/9;
    //Send the calculated temperature to HTML
    document.querySelector('#c-output').innerText = Celsius;

}


