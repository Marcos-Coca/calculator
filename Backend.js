var keys = document.getElementsByClassName('Normal');

Array.from(keys).forEach(key => {
    key.addEventListener('click',function(event){
        var key = event.target;
        enternum(key)
    })    
});

function enternum(key) {
    var value = key.value
    switch (value) {
        case "/":
            return operate("div",key);
            
        case "*":
            return operate("mul",key);
            
        case "=": 
        case "Enter":
            return ans(key);
            
        case "+":
            return operate("add",key);
            
        case "-":
            return operate("sub",key);
            
        case "Backspace":
            return Backspace();

        default: 
            return numb(value,key)
    }
}

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
            return input2 = "";
            
        case "sub":
            document.getElementById("main").innerHTML = input1 - input2;
            input1 = document.getElementById("main").innerHTML;
            return input2 = "";
            
        case "div":
            document.getElementById("main").innerHTML = input1 / input2;
            input1 = document.getElementById("main").innerHTML;
            return input2 = "";
            
        case "mul":
            document.getElementById("main").innerHTML = input1 * input2;
            input1 = document.getElementById("main").innerHTML;
            return input2 = "";
            
        default:
            return console.log("no operation selected!");
            
    }
}

function Backspace() {
    document.getElementById("main").innerHTML = document.getElementById("main").innerHTML.slice(0, -1);
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
    numClicked.className = "Normal";
}
