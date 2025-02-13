
const result = document.querySelector('#result')



function clearDisplay(){
    result.value = ""

}

function appendToDisplay (input){

    result.value += input
}

function calculate (){
    try{
        result.value =eval(result.value) 

    }catch(error){
        result.value="Error"
    }

}

//Entering using the keyboard
document.addEventListener('keydown', function(event) {
    const validKeys = '0123456789+-*/.';
    if (validKeys.includes(event.key)) {
        appendToDisplay(event.key);
    } else if (event.key === 'Enter') {
        calculate();
    } else if (event.key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    } else if (event.key === 'Escape') {
        clearDisplay();
    }
});
