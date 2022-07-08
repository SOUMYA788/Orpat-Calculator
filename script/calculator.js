const screen_total = document.querySelector('#totalValue');
const screen_calculation = document.querySelector('#calculation');
const screenDiv = document.querySelector('#screenDiv');
const onBtn = document.querySelector('#on')
const offBtn = document.querySelector('#off')

let operateValue='';
let screenValue = '';

let history = [];


const buttons = document.querySelectorAll(".button")

for (items of buttons) {
    // for of start

    items.addEventListener('click', (e) => {

        let buttonText = e.target.innerText;
        let changeBtnTxt = '';
        console.log('just press on', buttonText);


        if (buttonText == 'X') {

            changeBtnTxt = '*';
            operateValue += changeBtnTxt;
            screenValue += buttonText;
            screen_total.innerText = screenValue;

        } else if (buttonText == '÷') {

            changeBtnTxt = '/';
            operateValue += changeBtnTxt;
            screenValue += buttonText;
            screen_total.innerText = screenValue;

        } else if (buttonText == '=') {

            screen_calculation.innerText = screenValue;
            screen_total.innerText = eval(operateValue);

        } else if (buttonText == '%') {

            changeBtnTxt = '/100';
            operateValue += changeBtnTxt;
            screenValue += buttonText;
            screen_total.innerText = screenValue;

        } else if (buttonText == '+/-') {

            screen_total.value = -screen_total.value;

        } else if (buttonText == '√') {

            screenValue += Math.sqrt(screen_total.value);
            screen_total.innerText = screenValue;

        } else if (buttonText == 'ON') {

            screenDiv.style.background = '#c6f1c6';
            screenValue = "";
            operateValue = "";
            screen_total.innerText = screenValue;
            screen_calculation.innerText = screenValue;

        } else if (buttonText == 'OFF') {

            screenDiv.style.background = 'black';
            screenValue = "";
            operateValue = "";
            screen_total.innerText = screenValue;

        } else {

            operateValue += buttonText;
            screenValue += buttonText;
            screen_total.innerText = screenValue;

        }
    })

    // for of end
}

let num1 = "2"
let num2 = "4"
let sumnum = eval(num1 + num2)

console.log(sumnum);


// for syntific calculator:
// logarithem = 
//          math.log(screen.value);