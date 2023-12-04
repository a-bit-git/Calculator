var i = document.getElementById("inputbox")
let buttons = document.querySelectorAll("button")
let output = ""
let array = Array.from(buttons)
// --------------------------------------------------------------
array.forEach((button) => {
  // creating event handler
  button.addEventListener('click', (e) => {
    // evalving the user input as arithmatic expressions
    if (e.target.innerHTML == "=") {
      output = eval(output)
      i.value = output
    }
    // handling (C) to clear screen
    else if (e.target.innerHTML == "C") {
      output = ""
      i.value = output
    }
    // handling (🡄) to delete last enserted item
    else if (e.target.innerHTML == "🡄") {
      output = output.substring(0, output.length - 1)
      i.value = output
    }
    // handling (.) decimal in user input
    else if (e.target.innerHTML == ".") {
      if (output.length != 0) {
        for (let k = 1; k < output.length + 1; k++) {
          if (output[output.length - k] === "+" ||
            output[output.length - k] === "-" ||
            output[output.length - k] === "*" ||
            output[output.length - k] === "/") {
            if (k === 1) {
              output = output + "0."
              i.value = output
              break
            }
            else {
              output = output + "."
              i.value = output
              break
            }
          }
          else if (output[output.length - k] === ".") {
            output = output
            i.value = output
            break
          }
          else {
            if (k === output.length) {
              output = output + "."
              i.value = output
              break
            }
            else {
              continue
            }
          }
        }
      }
      else {
        output = output + "0."
        i.value = output
      }
    }
    // handling (0) zero in user input
    else if (e.target.innerHTML == "0") {
      if (output.length != 0) {
        output = output + "0"
        i.value = output
      }
      else {
        output = output
        i.value = output
      }
    }
    // handling (+) addition in user input
    else if (e.target.innerHTML === "+") {
      if (output.length != 0) {
        if (output[output.length - 1] === "+" ||
          output[output.length - 1] === "-" ||
          output[output.length - 1] === "*" ||
          output[output.length - 1] === "/") {
          output = output.substring(0, output.length - 1) + "+"
          i.value = output
        }
        else {
          output = output + "+"
          i.value = output
        }
      }
      else {
        alert("Enter an operands first")
      }
    }
    // handling (-) subtraction in user input 
    else if (e.target.innerHTML === "-") {
      if (output.length != 0) {
        if (output[output.length - 1] === "+" ||
          output[output.length - 1] === "-" ||
          output[output.length - 1] === "*" ||
          output[output.length - 1] === "/") {
          output = output.substring(0, output.length - 1) + "-"
          i.value = output
        }
        else {
          output = output + "-"
          i.value = output
        }
      }
      else {
        alert("Enter an operands first")
      }
    }
    // handling (×) multiplication in user input
    else if (e.target.innerHTML === "×") {
      if (output.length != 0) {
        if (output[output.length - 1] === "+" ||
          output[output.length - 1] === "-" ||
          output[output.length - 1] === "*" ||
          output[output.length - 1] === "/") {
          output = output.substring(0, output.length - 1) + "*"
          i.value = output
        }
        else {
          output = output + "*"
          i.value = output
        }
      }
      else {
        alert("Enter an operands first")
      }
    }
    // handling (÷) division in user input
    else if (e.target.innerHTML === "÷") {
      if (output.length != 0) {
        if (output[output.length - 1] === "+" ||
          output[output.length - 1] === "-" ||
          output[output.length - 1] === "*" ||
          output[output.length - 1] === "/") {
          output = output.substring(0, output.length - 1) + "/"
          i.value = output
        }
        else {
          output = output + "/"
          i.value = output
        }
      }
      else {
        alert("Enter an operands first")
      }
    }
    // adding items according to the user input
    else {
      output = output + e.target.innerHTML
      i.value = output
    }
  })
})