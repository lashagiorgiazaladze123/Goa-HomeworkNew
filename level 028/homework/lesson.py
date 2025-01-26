#1
def add_five(number):
    return number + 5
#2
def multiply_two_numbers(a, b):
    return a * b



#3

def string_length(s):
    return len(s)

#4
def list_of_lengths(strings):
    return [len(s) for s in strings]


#5
def is_palindrome(s):
    return s == s[::-1]


#6
def longest_string(strings):
    return max(strings, key=len)


#7
import math

def factorial(n):
    return math.factorial(n)



#8

def sum_of_maxima(list1, list2):
    return max(list1) + max(list2)


#9

def difference_of_minima(list1, list2):
    return abs(min(list1) - min(list2))
#10
def max_min_difference(numbers):
    return max(numbers) - min(numbers)

#all
print(add_five(10)) 
print(multiply_two_numbers(3, 4))  
print(string_length("hello"))  
print(list_of_lengths(["cat", "elephant", "dog"]))  
print(is_palindrome("racecar"))  
print(longest_string(["short", "medium", "longest"]))  
print(factorial(5))  
print(sum_of_maxima([1, 2, 3], [4, 5, 6])) 
print(difference_of_minima([1, 2, 3], [4, 5, 6]))  
print(max_min_difference([1, 2, 3, 4, 5])) 

def sum_of_elements(numbers):
    return sum(numbers)

def count_vowels(s):
    vowels = 'aeiouAEIOU'
    return sum(1 for char in s if char in vowels)

def square_elements(numbers):
    return [x ** 2 for x in numbers]

def reverse_string(s):
    return s[::-1]

def is_even(n):
    return n % 2 == 0

def longest_string(strings):
    return max(strings, key=len)

def smallest_number(numbers):
    return min(numbers)

import math
def gcd(a, b):
    return math.gcd(a, b)

def to_uppercase(s):
    return s.upper()

def average_of_list(numbers):
    return sum(numbers) / len(numbers)



print(sum_of_elements([1, 2, 3]))
print(count_vowels("hello world"))
print(square_elements([2, 4]))
print(reverse_string("hello"))
print(is_even(4))
print(longest_string(["cat", "elephant", "dog"]))
print(smallest_number([1, 2, 3]))
print(gcd(18, 24))
print(to_uppercase("hello"))
print(average_of_list([1, 5, 12]))





