const number1 = Number (prompt ('Enter any number'));
const operator = prompt ('Enter one of the suggested operator (*/+-)');
const number2 =  Number (prompt ('Enter any number again'));
const message = 'Your result = ';

if (isNaN(number1) || isNaN(number2)) {
    alert('Incorect input');
} else {
    if (operator === '*') {
        alert (message + (number1 * number2));
    } else if (operator === '/') {
        alert(message + (number1 / number2));
    } else if (operator === '+') {
        alert(message + (number1 + number2));
    } else if (operator === '-') {
        alert(message + (number1 - number2));
    } else {
        alert('No such operation exists.');
    }
}







