function Result(x) {
    document.getElementById("result").value = x;
  }
  
  function calculate() {
    try {
      var num1 = parseFloat(document.getElementById("num1").value);
      var num2 = parseFloat(document.getElementById("num2").value);
      var operator = document.getElementById("op").value;
  
      if (isNaN(num1) || isNaN(num2)) {
        Result('Invalid input');
        return;
      }
  
      switch (operator) {
        case '+':
          Result(num1 + num2);
          break;
        case '-':
          Result(num1 - num2);
          break;
        case '*':
          Result(num1 * num2);
          break;
        case '/':
          if (num2 !== 0) {
            Result(num1 / num2);
          } else {
            Result('Cannot divide by zero');
          }
          break;
        default:
          Result('Invalid operator');
      }
    } catch (error) {
      Result('Error');
    }
  }

  function clear() {
    document.getElementById("num1").value = '';
    document.getElementById("op").value = '+';
    document.getElementById("num2").value = '';
    document.getElementById("result").value = '';
  }
  