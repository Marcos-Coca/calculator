function numb(k, ele) {
    if (!(document.getElementById("main").innerHTML.includes(".") && k == ".")) {
        if (!input1) {
            document.getElementById("main").innerHTML += k;
        }
        if (input1) {
            var len = input1.length;
            if (document.getElementById("main").innerHTML[len] == "+" || document.getElementById("main").innerHTML[len] == "-" || document.getElementById("main").innerHTML[len] == "*" || document.getElementById("main").innerHTML[len] == "/") {
                clearScr();
                document.getElementById("main").innerHTML += k;
            } else {
                document.getElementById("main").innerHTML += k;
            }
        }
    }
    clickstart(ele);
}

function clearScreen() {
    console.log("clear called");
    document.getElementById("main").innerHTML = "";
    input1 = "";
    input2 = "";
}

function clearScr() {
    document.getElementById("main").innerHTML = "";
}

var operation;
var input1;
var input2;

function operate(k, ele) {
    input1 = document.getElementById("main").innerHTML;
    if (k == "add") {
        console.log("add");
        operation = "add";
        document.getElementById("main").innerHTML += "+";
    }

    if (k == "sub") {
        console.log("sub");
        operation = "sub";
        document.getElementById("main").innerHTML += "-";
    }

    if (k == "div") {
        console.log("div");
        operation = "div";
        document.getElementById("main").innerHTML += "/";
    }

    if (k == "mul") {
        console.log("mul");
        operation = "mul";
        document.getElementById("main").innerHTML += "*";
    }
    clickstart(ele);

}


function ans(ele) {
    console.log("Answer called! with operation", operation);
    input2 = document.getElementById("main").innerHTML;
    clickstart(ele);
    switch (operation) {
        case "add":
            document.getElementById("main").innerHTML = parseFloat(input1) + parseFloat(input2);
            input1 = document.getElementById("main").innerHTML;
            input2 = "";
            break;
        case "sub":
            document.getElementById("main").innerHTML = input1 - input2;
            input1 = document.getElementById("main").innerHTML;
            input2 = "";
            break;
        case "div":
            document.getElementById("main").innerHTML = input1 / input2;
            input1 = document.getElementById("main").innerHTML;
            input2 = "";
            break;
        case "mul":
            document.getElementById("main").innerHTML = input1 * input2;
            input1 = document.getElementById("main").innerHTML;
            input2 = "";
            break;
        default:
            console.log("no operation selected!");
            break;
    }
}

function Backspace() {
    document.getElementById("main").innerHTML = document.getElementById("main").innerHTML.slice(0, -1);
}

function enternum(event) {
    console.log(event.key);
    switch (event.key) {
        case "1":
            numb(1);
            break;
        case "2":
            numb(2);
            break;
        case "3":
            numb(3);
            break;
        case "4":
            numb(4);
            break;
        case "5":
            numb(5);
            break;
        case "6":
            numb(6);
            break;
        case "7":
            numb(7);
            break;
        case "8":
            numb(8);
            break;
        case "9":
            numb(9);
            break;
        case "0":
            numb(0);
            break;
        case "/":
            operate("div");
            break;
        case "*":
            operate("mul");
            break;
        case ".":
            numb(".");
            break;
        case "=", "Enter":
            ans("ans");
            break;
        case "+":
            operate("add");
            break;
        case "-":
            operate("sub");
            break;
        case "Backspace":
            Backspace();
            break;
    }
}

function glow(ele) {
    ele.className = "glowing";
}

function revGlow(ele) {
    ele.className = "Normal";
}

var numClicked

function clickstart(ele) {
    console.log("click started");
    ele.className = "clicked";
    numClicked = ele;
    setTimeout(clickstop, 50)
}

function clickstop() {
    console.log("click stoped");
    numClicked.className = "glowing";
}
