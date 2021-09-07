const calculator = {
    displayNumber: '0',
    operator: null,
    firstNumber: null,
    waitingForSecondNumber: false
};

function updateDisplay() {
    document.querySelector("#displayNumber").innerText = calculator.displayNumber;
}

function clearCalculator() {
    calculator.displayNumber = '0';
    calculator.operator = null;
    calculator.firstNumber = null;
    calculator.waitingForSecondNumber = false;
}

function inputDigit(digit) {
    if(calculator.displayNumber === '0') {
        if(digit == '.') {
            calculator.displayNumber = '0'+digit;
        } else {
            calculator.displayNumber = digit;
        }
    } else {
        calculator.displayNumber += digit;
    }
}

function handleOperator(operator) {
    if (!calculator.waitingForSecondNumber) {
        calculator.operator = operator;
        calculator.waitingForSecondNumber = true;
        calculator.firstNumber = calculator.displayNumber;
 
        // mengatur ulang nilai display number supaya tombol selanjutnya dimulai dari angka pertama lagi
        calculator.displayNumber = '0';
    } else {
        alert('Operator sudah ditetapkan');
    }
}

function performCalculation() {
    try{
        if(calculator.firstNumber == null || calculator.operator == null) throw "operator is empty";
        if(calculator.firstNumber == true || calculator.displayNumber == "0") throw "cannot divide by 0";
        let result = 0;
    
    if (calculator.operator === "+") {
        result = parseFloat(calculator.firstNumber) + parseFloat(calculator.displayNumber);
    }else if(calculator.operator === "-") {
        result = parseFloat(calculator.firstNumber) - parseFloat(calculator.displayNumber);
    }else if(calculator.operator === "x") {
        result = parseFloat(calculator.firstNumber) * parseFloat(calculator.displayNumber);
    }else if(calculator.operator === "÷") {
        result = parseFloat(calculator.firstNumber) / parseFloat(calculator.displayNumber);
    }else if(calculator.operator === "%") {
        result = parseFloat(calculator.firstNumber) % parseFloat(calculator.displayNumber);
    }
    // alert(calculator.firstNumber);
    // alert(calculator.displayNumber);
    calculator.displayNumber = result;
    // alert("tes");
    }catch(err){
        alert(err);
    };

    
}

const buttons = document.querySelectorAll(".button");
for (let button of buttons) {
   button.addEventListener('click', function(e) {
 
       // mendapatkan objek elemen yang diklik
       const target = e.target;
 
       if (target.classList.contains('clear')) {
           clearCalculator();
           updateDisplay();
           return;
        }

        if(target.classList.contains('equals')) {
            performCalculation();
            updateDisplay();
            return;
        }

        if(target.classList.contains('operator')) {
            handleOperator(target.innerText);
            return;
        }

       inputDigit(target.innerText);
       updateDisplay()
   });
}





