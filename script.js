"use strict"

//Q1.
function printMinimalNum(first, second){
    console.log(Math.min(first, second));
}

//Q2.
function stringsLongerThanThree(firstStr, secondStr, thirdStr, fourthStr){
    let howMuch = 0;
    if (firstStr.length > 3){
        howMuch++;
    }
    if (secondStr.length > 3){
        howMuch++;
    }
    if (thirdStr.length > 3){
        howMuch++;
    }
    if (fourthStr.length > 3){
        howMuch++;
    }
    console.log(howMuch);
}

//Q3.
function checkIfAExists(){
    let input = prompt("Please enter a string: ");
    if (input.includes("A")){
        input = input.replace('A', 'a');
        console.log(input);
    }
}

//Q4.
function printNumDetails(num){
    let posOrNeg = "Positive";
    let EvenOrOdd = "Even"
    if (num < 0){
        posOrNeg = "Negative"
    }
    if (num % 2 != 0){
        EvenOrOdd = "Odd"
    }
    console.log(posOrNeg, EvenOrOdd);
}

//Q5.
function CheckLetters(str){
    let firstLetter = str.charAt(0);
    let lastLetter = str.charAt(str.length-1);
    if (firstLetter == lastLetter){
        str = str.substring(1, str.length-1);
    }
    console.log(str);
}

//Q6.
function checkString(myStr){
    if (myStr.includes('*')){
        myStr =myStr.replace('*', '');
    }
    if (myStr.includes('@')){
        myStr = '*'+ myStr +'*';
    }
    if (myStr.includes('₪')){
        myStr = myStr.substring(0, myStr.length-1);
        myStr = myStr + " new Shekel"
    }
    console.log(myStr);
}




//main
printMinimalNum(8, 5);
stringsLongerThanThree("aba", "gda", "vaza", "chati");
//checkIfAExists();
printNumDetails(4);
CheckLetters("hanal'eh");
checkString("st*ar");
checkString("yonatandu@outlook");
checkString("124₪");