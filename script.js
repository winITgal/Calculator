let displayValue = '0';

function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}

function appendToDisplay(value) {
    if (displayValue === '0') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
        updateDisplay();
        displayGlowEffect();
        enhanceGlowEffect(); 
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

function displayGlowEffect() {
    const display = document.getElementById('display');
    display.classList.add('glow');
    setTimeout(() => {
        display.classList.remove('glow');
    }, 1000);
}
function enhanceGlowEffect() {
    const calculator = document.querySelector('.calculator');
    calculator.style.boxShadow = '0 0 30px 15px #7a82ab'; 
    setTimeout(() => {
        calculator.style.boxShadow = '0 0 20px 10px #7a82ab'; /* Revert to a slightly dimmer glow after a short delay */
    }, 500);
}



