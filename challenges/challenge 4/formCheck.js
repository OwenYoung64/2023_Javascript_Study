// Gain Access to form elements
const submitButton = document.getElementById('submit');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const phoneField = document.getElementById('phone');
// Add event listener to submit button
submitButton.addEventListener('click', checkForm);


function checkForm(){
    if(nameField.value === ''){
        nameField.style.backgroundColor = 'red';
    } else {
        nameField.style.backgroundColor = 'white';
    }
}