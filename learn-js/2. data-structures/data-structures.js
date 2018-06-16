"use strict";

// Chapter 1: Numbers
function numbersTask1() {
    let a = +prompt("Введите первое число", "");
    let b = +prompt("Введите второе число", "");

    alert(a + b);
}

function numbersTask2() {
    function getDecimal(num) {
        let str = "" + num;
        let zeroPos = str.indexOf(".");

        if (zeroPos == -1) {
            return 0;
        }
        str = str.slice(zeroPos);

        return +str;
    }

    alert(getDecimal(12.5)); // 0.5
    alert(getDecimal(1.2));  // 0.2
}

function numbersTask3() {
    let max = 5;
    alert(Math.random() * max);
}

//numbersTask1();
//numbersTask2();
//numbersTask3();

// Chapter 2: Strings