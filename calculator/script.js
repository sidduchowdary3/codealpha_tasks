// script.js
function appendValue(value) {
    const result = document.getElementById('result');
    result.value += value;
  }
  
  function clearDisplay() {
    document.getElementById('result').value = '';
  }
  
  function deleteLast() {
    const result = document.getElementById('result');
    result.value = result.value.slice(0, -1);
  }
  
  function calculate() {
    const result = document.getElementById('result');
    try {
      result.value = eval(result.value);
    } catch {
      result.value = 'Error';
    }
  }
  