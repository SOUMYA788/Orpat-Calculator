const screen = document.querySelector('#screen');
let screenValue = '';
const buttons = document.querySelectorAll("button")
for (items of buttons) {
    // for of start

    items.addEventListener('click', (e) => {

        let buttonText = e.target.innerText;
        console.log('just press on', buttonText);


        if (buttonText == 'X') {

            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;

        } else if (buttonText == '⨸') {

            buttonText = '/';
            screenValue += buttonText;
            screen.value = screenValue;

        } else if (buttonText == '=') {

            screen.value = eval(screen.value)

        } else if (buttonText == '%') {

            buttonText = '/100';
            screenValue += buttonText;
            screen.value = screenValue;

        } else if (buttonText == '+/-') {


            screen.value = -screen.value;

        } else if (buttonText == '√') {

            screenValue += Math.sqrt(screen.value);
            screen.value = screenValue;

        } else if (buttonText == 'ON') {

            screen.value = ""
            screenValue = "";
            screen.value = screenValue;


        } else if (buttonText == 'OFF') {

            screenValue += "";
            screen.value = screenvalue;

        } else {

            screenValue += buttonText;
            screen.value = screenValue;

        }
    })

    // for of end
}

// for syntific calculator:
// logarithem = 
//          math.log(screen.value);