import re


def solve_equation(equation):
    """
    Solves a linear equation of the form:
    - ax + b = c
    - ax * b = c
    - ax / b = c
    """
    try:
        left, right = equation.split("=")
        right = eval(right.strip())  # Evaluate right-hand side
    except:
        return "Error: Invalid equation format"

    left = left.replace(" ", "")  # Remove spaces

    # Handle multiplication or division cases (e.g., "2x * 3 = 10" or "2x / 3 = 10")
    if "*" in left:
        parts = left.split("*")
        if "x" in parts[0]:
            coeff_str, multiplier = parts
        else:
            multiplier, coeff_str = parts
        try:
            coeff = int(coeff_str.replace("x", ""))
            multiplier = int(multiplier)
            x = right / multiplier / coeff
            return f"x = {x}"
        except:
            return "Error: Invalid multiplication format"

    if "/" in left:
        parts = left.split("/")
        if "x" in parts[0]:
            coeff_str, divisor = parts
        else:
            divisor, coeff_str = parts
        try:
            coeff = int(coeff_str.replace("x", ""))
            divisor = int(divisor)
            x = right * divisor / coeff
            return f"x = {x}"
        except:
            return "Error: Invalid division format"

    # Handle standard linear equations "ax + b = c"
    match = re.match(r'([+-]?\d*)x\s*([+-]\s*\d+)?', left)
    if match:
        coeff_str, const_str = match.groups()
        coeff = int(coeff_str) if coeff_str and coeff_str not in ["+", "-"] else int(coeff_str + "1")
        const = int(const_str.replace(" ", "")) if const_str else 0
        try:
            x = (right - const) / coeff
            return f"x = {x}"
        except ZeroDivisionError:
            return "Error: Division by zero (invalid equation)"

    return "Error: Unsupported equation format"


def safe_eval(expression):
    """Evaluates a simple math expression safely or solves an equation."""
    allowed_chars = set("0123456789+-*/(). x=")

    if not all(char in allowed_chars for char in expression):
        return "Error: Invalid characters in expression"

    if "=" in expression:
        return solve_equation(expression)

    try:
        result = eval(expression)
        return result
    except Exception as e:
        return f"Error: {e}"


def calculator():
    print("Enter a mathematical expression or equation (e.g., 2 + 3 * (2 + 10) or 2x * 3 = 10):")
    expression = input("> ")

    result = safe_eval(expression)
    print("Result:", result)


if __name__ == "__main__":
    calculator()
