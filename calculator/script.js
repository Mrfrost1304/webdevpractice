let display = '';

function updateDisplay(value) {
  display += value;
  document.querySelector('#result').value = display;
}
document.addEventListener('keydown', function (event) {
  const key = event.key;

  if (!isNaN(key)) {
    // If the key is a number (0–9)
    updateDisplay(key);
  } else if (['+', '-', '*', '/'].includes(key)) {
    updateDisplay(key);
  } else if (key === 'Enter') {
    calculate(); // You can define this function to evaluate
  } else if (key === 'Backspace') {
    backspace(); // Optional: define this to remove last char
  } else if (key.toLowerCase() === 'c') {
    clearDisplay(); // Optional: define this to clear input
  }
});

function calculate() {
  try {
    const result = eval(display);
    document.querySelector('#result').value = result;
    display = result.toString(); // Update display to the result
  } catch (error) {
    alert('Invalid expression');
  }
}
function backspace() {
  display = display.slice(0, -1);
  document.querySelector('#result').value = display;
}
function clearDisplay() {
  display = '';
  document.querySelector('#result').value = display;
}
