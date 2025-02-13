import random
import time
import math

class MathHelper:
    PI = math.pi  # Constant property

    @staticmethod
    def power(base, exp):
        return base ** exp  # Exponentiation

    @staticmethod
    def square_root(n):
        return math.sqrt(n)  # Square root calculation

class RandomHelper:
    CHAR_SET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"  # Property

    @staticmethod
    def random_char():
        return random.choice(RandomHelper.CHAR_SET)  # Returns a random character

    @staticmethod
    def random_number(start, end):
        return random.randint(start, end)  # Returns a random number within range

class TimeHelper:
    CREATION_TIME = time.time()  # Timestamp of object creation

    @staticmethod
    def millis_to_readable(milliseconds):
        seconds = milliseconds / 1000
        return time.strftime("%H:%M:%S", time.gmtime(seconds))  # Converts milliseconds to readable time

# Testing MathHelper
print("Pi:", MathHelper.PI)
print("2^3:", MathHelper.power(2, 3))
print("Square root of 16:", MathHelper.square_root(16))

# Testing RandomHelper
print("Random character:", RandomHelper.random_char())
print("Random number (1-100):", RandomHelper.random_number(1, 100))

# Testing TimeHelper
print("Creation time (timestamp):", TimeHelper.CREATION_TIME)
print("5000ms in readable format:", TimeHelper.millis_to_readable(5000))
