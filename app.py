def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        return "Error! Division by zero."
    return a / b

def percentage(a, b):
    if b == 0:
        return "Error! Division by zero."
    return (a / b) * 100

def calculator():
    """
    This module provides a simple calculator function that allows users to perform basic arithmetic operations.

    Functions:
        calculator():
            Prompts the user to select an arithmetic operation (addition, subtraction, multiplication, division, or percentage),
            takes two numerical inputs, and performs the selected operation. The result is displayed to the user.

    Usage:
        Run the `calculator` function to interactively perform arithmetic operations.
        The user is prompted to:
            1. Select an operation by entering a number (1-5).
            2. Input two numerical values.
            3. View the result of the selected operation.

    Operations:
        1. Add: Adds two numbers.
        2. Subtract: Subtracts the second number from the first.
        3. Multiply: Multiplies two numbers.
        4. Divide: Divides the first number by the second (if the second number is not zero).
        5. Percentage: Calculates the percentage of the first number relative to the second.

    Note:
        - Input validation is limited to checking if the operation choice is valid.
        - The function assumes that the user inputs valid numerical values for the numbers.
    """
    print("Select operation:")
    print("1. Add")
    print("2. Subtract")
    print("3. Multiply")
    print("4. Divide")
    print("5. Percentage")

    choice = input("Enter choice (1/2/3/4/5): ")

    if choice in ['1', '2', '3', '4', '5']:
        num1 = float(input("Enter first number: "))
        num2 = float(input("Enter second number: "))

        if choice == '1':
            print(f"The result is: {add(num1, num2)}")
        elif choice == '2':
            print(f"The result is: {subtract(num1, num2)}")
        elif choice == '3':
            print(f"The result is: {multiply(num1, num2)}")
        elif choice == '4':
            print(f"The result is: {divide(num1, num2)}")
        elif choice == '5':
            print(f"The result is: {percentage(num1, num2)}%")
    else:
        print("Invalid input. Please select a valid operation.")

if __name__ == "__main__":
    calculator()