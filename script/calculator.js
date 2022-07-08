const screen = document.querySelector('#screen');
let operateValue='';
let screenValue = '';

const buttons = document.querySelectorAll("button")
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
            screen.value = screenValue;

        } else if (buttonText == '÷') {

            changeBtnTxt = '/';
            operateValue += changeBtnTxt;
            screenValue += buttonText;
            screen.value = screenValue;

        } else if (buttonText == '=') {

            screen.value = eval(operateValue)

        } else if (buttonText == '%') {

            changeBtnTxt = '/100';
            operateValue += changeBtnTxt;
            screenValue += buttonText;
            screen.value = screenValue;

        } else if (buttonText == '+/-') {


            screen.value = -screen.value;

        } else if (buttonText == '√') {

            screenValue += Math.sqrt(screen.value);
            screen.value = screenValue;

        } else if (buttonText == 'ON') {

            screenValue = "";
            operateValue = "";
            screen.value = screenValue;


        } else if (buttonText == 'OFF') {

            screenValue = "";
            operateValue = "";
            screen.value = screenvalue;

        } else {

            operateValue += buttonText;
            screenValue += buttonText;
            screen.value = screenValue;

        }
    })

    // for of end
}

// for syntific calculator:
// logarithem = 
//          math.log(screen.value);