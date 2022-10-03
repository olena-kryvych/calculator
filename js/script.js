var num1 = ''; //перша змінна
var num2 = ''; //друга змінна
var sign = ''; //знак операції
var finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', '*', '/'];

//екран
const out = document.querySelector('.calc-screen p');


document.querySelector('.buttons').onclick = (event) => {
    //натиснута не кнопка
    if (!event.target.classList.contains('btn')) return;

    out.textContent = '';
    //отримую натиснуту кнопку
    const key = event.target.textContent;
    //зчитування тексту з кнопки

    //якщо натиснута кнопка з цифрою (0-9) або точкою
    if (digit.includes(key)) {
        if (num2 === '' && sign === '') {
            num1 += key;

            out.textContent = num1;
        }
        else if (num1 !== '' && num2 !== '' && finish) {
            num2 = key;
            finish = false;
            out.textContent = num2;
        }
        else {
            num2 += key;
            out.textContent = num2;
        }
        console.table(num1, num2, sign);
        return;
    }

    //якщо натиснута кнопка операції ('-', '+', '*', '/')
    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.log(num1, num2, sign);
        return;
    }

    //натиснуто "="
    if (key === '=') {
        if (num2 === '') num2 = num1;
        switch (sign) {
            case "+":
                num1 = (+num1) + (+num2);
                break;
            case "-":
                num1 = num1 - num2;
                break;
            case "*":
                num1 = num1 * num2;
                break;
            case "/":
                if (num2 === '0') {
                    out.textContent = 'Помилка';
                    num1 = '';
                    num2 = '';
                    sign = '';
                    return;
                }
                num1 = num1 / num2;
                break;
        }
        finish = true;
        out.textContent = num1;
        console.table(num1, num2, sign);
    }
}
