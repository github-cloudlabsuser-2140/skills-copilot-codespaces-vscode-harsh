const Calculator = require('./test.js'); // Adjust the path if necessary

// test.test.js

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('should add two numbers correctly', () => {
        expect(calculator.add(2, 3)).toBe(5);
        expect(calculator.add(-1, -1)).toBe(-2);
        expect(calculator.add(0, 5)).toBe(5);
    });

    test('should subtract two numbers correctly', () => {
        expect(calculator.subtract(5, 3)).toBe(2);
        expect(calculator.subtract(0, 5)).toBe(-5);
        expect(calculator.subtract(-3, -1)).toBe(-2);
    });

    test('should multiply two numbers correctly', () => {
        expect(calculator.multiply(2, 3)).toBe(6);
        expect(calculator.multiply(-2, 3)).toBe(-6);
        expect(calculator.multiply(0, 5)).toBe(0);
    });

    test('should divide two numbers correctly', () => {
        expect(calculator.divide(6, 3)).toBe(2);
        expect(calculator.divide(-6, 3)).toBe(-2);
        expect(calculator.divide(0, 5)).toBe(0);
    });

    test('should throw an error when dividing by zero', () => {
        expect(() => calculator.divide(5, 0)).toThrow('Division by zero is not allowed.');
    });
});