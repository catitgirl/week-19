let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let out = document.getElementById('out');

class Calculator {
    static showPlus() {
        plus.addEventListener('click', () => {
            let result = Number(num1.value) + Number(num2.value);
            document.getElementById("out").innerHTML = result;
        });
    }
    static showMinus() {
        minus.addEventListener('click', () => {
            let result = (num1.value) - (num2.value);
            document.getElementById("out").innerHTML = result;
        });
    }
    static showTimes() {
        times.addEventListener('click', () => {
            let result = (num1.value) * (num2.value);
            document.getElementById("out").innerHTML = result;
        });
    }
    static showDivide() {
        divide.addEventListener('click', () => {
            let result = 1;
            if (num2.value == 0) {
                alert('На ноль делить нельзя!');
            } else
                result = (num1.value) / (num2.value);
                document.getElementById("out").innerHTML = result;
        });
    }
}

Calculator.showPlus();
Calculator.showMinus();
Calculator.showTimes();
Calculator.showDivide();