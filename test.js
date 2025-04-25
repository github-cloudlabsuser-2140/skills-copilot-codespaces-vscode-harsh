// Calculator class to handle operations
class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }
}

// Main function to interact with the calculator
function main() {
    const calculator = new Calculator();
    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log("Welcome to the Calculator!");
    console.log("Available operations: add, subtract, multiply, divide");

    rl.question("Enter the first number: ", (num1) => {
        const a = parseFloat(num1);

        rl.question("Enter the second number: ", (num2) => {
            const b = parseFloat(num2);

            rl.question("Enter the operation (add, subtract, multiply, divide): ", (operation) => {
                try {
                    let result;
                    switch (operation.toLowerCase()) {
                        case "add":
                            result = calculator.add(a, b);
                            break;
                        case "subtract":
                            result = calculator.subtract(a, b);
                            break;
                        case "multiply":
                            result = calculator.multiply(a, b);
                            break;
                        case "divide":
                            result = calculator.divide(a, b);
                            break;
                        default:
                            console.log("Invalid operation. Please choose add, subtract, multiply, or divide.");
                            rl.close();
                            return;
                    }

                    console.log(`The result of ${operation} is: ${result}`);
                } catch (error) {
                    console.error(error.message);
                } finally {
                    rl.close();
                }
            });
        });
    });
}

// Run the main function
main();