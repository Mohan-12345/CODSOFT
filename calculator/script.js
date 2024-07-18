document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let operator = '';
    let firstValue = '';
    let secondValue = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');

            if (button.id === 'clear') {
                currentInput = '';
                operator = '';
                firstValue = '';
                secondValue = '';
                display.textContent = '';
            } else if (button.id === 'equals') {
                secondValue = currentInput;
                if (firstValue && operator && secondValue) {
                    currentInput = calculate(firstValue, operator, secondValue);
                    display.textContent = currentInput;
                    firstValue = currentInput;
                    operator = '';
                    secondValue = '';
                }
            } else if (button.classList.contains('operator')) {
                if (currentInput) {
                    if (firstValue && operator) {
                        secondValue = currentInput;
                        currentInput = calculate(firstValue, operator, secondValue);
                        display.textContent = currentInput;
                        firstValue = currentInput;
                        secondValue = '';
                    } else {
                        firstValue = currentInput;
                    }
                    operator = value;
                    currentInput = '';
                }
            } else {
                currentInput += value;
                display.textContent = currentInput;
            }
        });
    });

    function calculate(a, operator, b) {
        a = parseFloat(a);
        b = parseFloat(b);

        switch (operator) {
            case '+':
                return (a + b).toString();
            case '-':
                return (a - b).toString();
            case '*':
                return (a * b).toString();
            case '/':
                return (a / b).toString();
            default:
                return '';
        }
    }
});
