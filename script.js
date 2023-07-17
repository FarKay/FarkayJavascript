/*let add = document.querySelector("#add");
let subtract = document.querySelector("#subtract");

function Selector() {
    let output = document.querySelector("#output");
}

function addition() {
  let result = Number(output.innerText) + 1;

  if (result > 10) { 
    result = 0;
  }

  output.innerText = result;
}

function subtraction() {
    let result = Number(output.innerText) - 1;
      
    if (result < 0) {
      result = 0;
    }
      
    output.innerText = result;
}

add.addEventListener("click", addition);

subtract.addEventListener("click", subtraction);*/

const add = document.querySelector("#add");
const subtract = document.querySelector("#subtract");

function Selector() {
  let output = document.querySelector("#output");
};

function addition() {
  let result = Number(output.innerText) + 1;
  if (result > 10) {
    result = 0;
  }
  output.innerText = result;
}

function subtraction() {
  let result = Number(output.innerText) - 1;
  if (result < 0) {
    result = 0;
  }
  output.innerText = result;
}

add.addEventListener("click", addition);
subtract.addEventListener("click", subtraction);