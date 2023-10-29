const button = document.querySelector('button')!;


function clickHandler(message: string) {
    console.log('Clicked! ' + message);
}
//! is used when you know for sure the value won't be empty
// if you're less sure you use if statement
if (button) {
button.addEventListener('click', clickHandler.bind(null, "You're welcome!"));
}
