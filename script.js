let resultBox = document.getElementById("result-box");
let memory = 0;

// Enter the values
function myFunc(e) {
  if (resultBox.innerHTML == 0 || resultBox.innerHTML == "") {
    if (e == "+" || e == "-" || e == "*" || e == "/" || e == "%") {
      return;
    }
  }

  if (resultBox.innerHTML == 0 && resultBox.innerHTML != "0." && e != ".") {
    resultBox.innerHTML = "";
  }
  resultBox.innerHTML += e;
}

// Calculate
function calculate() {
  try {
    resultBox.innerHTML = eval(resultBox.innerHTML);
  } catch (error) {
    alert("Please input valid data");
  }
}

// square
function square() {
  this.calculate();
  resultBox.innerHTML = Math.pow(resultBox.innerHTML, 2);
}
//reciprocal
function reciprocal() {
  this.calculate();
  resultBox.innerHTML = 1 / resultBox.innerHTML;
}

// cube
function cube() {
  this.calculate();
  resultBox.innerHTML = Math.pow(resultBox.innerHTML, 3);
}

// root
function root() {
  this.calculate();
  resultBox.innerHTML = Math.sqrt(resultBox.innerHTML);
}

//negate
function changeSign() {
  this.calculate();
  let currentResult = resultBox.innerHTML;
  let sign = Math.sign(currentResult);
  resultBox.innerHTML =
    sign === 1
      ? `-${currentResult}`
      : sign === -1
      ? currentResult.substr(1)
      : currentResult;
}

function memoryStore() {
  this.calculate();
  memory = resultBox.innerHTML;
}

function memoryRecall() {
  resultBox.innerHTML = memory;
}

function memoryClear() {
  memory = 0;
}

function memoryAdd() {
  this.calculate;
  memory = Number(memory) + Number(resultBox.innerHTML);
}
