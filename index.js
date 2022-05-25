const number_1 = Number (prompt ('Enter any number'));
const operator = prompt ('Enter one of the suggested operator (*/+-)');
const number_2 =  Number (prompt ('Enter any number again'));
const message = 'Your resultat = ';

if (isNaN(number_1) || isNaN(number_2)) {
    alert('Incorect input');
}

if (operator === '*') {
    alert (message + (number_1 * number_2));
} else if (operator === '/') {
    alert(message + (number_1 / number_2));
} else if (operator === '+') {
    alert(message + (number_1 + number_2));
} else if (operator === '-') {
    alert(message + (number_1 - number_2));
} else {
    alert('No such operation exists.');
}







