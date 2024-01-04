//setup Access to HtML elements
const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

//add listeners to all buttons
buttons.forEach(
    function(button){
        button.addEventListener('click', calculate);
    }
);

//calculate function - event handler for all buttons
function calculate(event){
    //what button was clicked?
    const clickedValue = event.target.value;

    //check if = was clicked
    if(clickedValue === '='){
        if(display.value !== ''){
            display.value = eval(display.value);
        }
    } else if(clickedValue === 'c'){
        display.value = '';
    } else {
        display.value += clickedValue;
    }
}