def add_five(number):
    return number + 5
print(add_five(10))  
print(add_five(-3)) 
print(add_five(7.5))  
#2
def multiply(a, b):
    return a * b
print(multiply(3, 5)) 
print(multiply(-4, 7))  
print(multiply(0, 10))
#3
def string_length(input_string):
    return len(input_string)
print(string_length("Hello")) 
print(string_length("Python is awesome")) 
print(string_length(""))
#4
def lengths_of_strings(string_list):
    return [len(s) for s in string_list]
strings = ["apple", "banana", "cherry"]
print(lengths_of_strings(strings)) 

more_strings = ["hello", "world", "python", "programming"]
print(lengths_of_strings(more_strings))  

empty_list = []
print(lengths_of_strings(empty_list))
#5
def is_palindrome(s):
   
    s = s.lower()  
    s = ''.join(filter(str.isalnum, s))  
    return s == s[::-1]  

# მაგალითები:
print(is_palindrome("wow"))  
print(is_palindrome("Madam"))  
print(is_palindrome("hello")) 
print(is_palindrome("A man, a plan, a canal, Panama"))  
print(is_palindrome("Was it a car or a cat I saw?"))  
print(is_palindrome("No lemon, no melon"))  

#6
def longest_string(string_list):
    
    longest = string_list[0]
    
    
    for s in string_list[1:]:
        if len(s) > len(longest):
            longest = s
    
    return longest


strings = ["apple", "banana", "cherry"]
print(longest_string(strings)) 

more_strings = ["hello", "world", "python", "programming"]
print(longest_string(more_strings)) 

empty_list = []
print(longest_string(empty_list))
#7
def factorial(n):
    if n < 0:
        return None  # ფაქტორიალი არ არსებობს უარყოფით რიცხვებთან
    if n == 0 or n == 1:
        return 1  # 0! და 1! იყოფა 1-ზე
    
    result = 1
    for i in range(2, n + 1):
        result *= i
    
    return result

# მაგალითები:
print(factorial(0)) 
print(factorial(5))  
print(factorial(10)) 
print(factorial(-3))  
#8
def max_sum_of_lists(list1, list2):
    max1 = max(list1)
    max2 = max(list2)
    return max1 + max2

# მაგალითები:
list1 = [1, 4, 7, 2, 9]
list2 = [5, 3, 8, 6, 2]
print(max_sum_of_lists(list1, list2))  

list3 = [10, 20, 30]
list4 = [5, 25, 15, 35]
print(max_sum_of_lists(list3, list4))  

#9
def min_difference_of_lists(list1, list2):
    min1 = min(list1)
    min2 = min(list2)
    return abs(min1 - min2)

# მაგალითები:
list1 = [1, 4, 7, 2, 9]
list2 = [5, 3, 8, 6, 2]
print(min_difference_of_lists(list1, list2))  

list3 = [10, 20, 30]
list4 = [5, 25, 15, 35]
print(min_difference_of_lists(list3, list4))  
#10
def max_min_difference(numbers):
    if not numbers:
        return None
    
    max_num = max(numbers)
    min_num = min(numbers)
    difference = max_num - min_num
    return difference

# მაგალითები:
numbers1 = [1, 4, 7, 2, 9]
print(max_min_difference(numbers1)) 

numbers2 = [5, 3, 8, 6, 2]
print(max_min_difference(numbers2))  

numbers3 = [10, 20, 30]
print(max_min_difference(numbers3)) 

numbers4 = [-5, -10, 0, 5, 10]
print(max_min_difference(numbers4))
#11
def sum_of_list(numbers):
    total = 0
    for num in numbers:
        total += num
    return total

# მაგალითები:
numbers1 = [1, 2, 3, 4, 5]
print(sum_of_list(numbers1))  

numbers2 = [-10, 0, 10, 20]
print(sum_of_list(numbers2))  

numbers3 = []
print(sum_of_list(numbers3))
#12
def count_vowels(string):
    vowels = "aeiouAEIOU"
    vowel_count = 0
    for char in string:
        if char in vowels:
            vowel_count += 1
    return vowel_count

# მაგალითები:
print(count_vowels("Hello, World!"))  # 3 (e, o, o)
print(count_vowels("Python is awesome"))  # 5 (o, i, e, a, e)
print(count_vowels("Try this string"))  # 2 (y, i)
print(count_vowels(""))
#13
def square_list(nums):
    squared_nums = [num ** 2 for num in nums]
    return squared_nums

# მაგალითის გაშვება:
input_list = [2, 4]
output_list = square_list(input_list)
print(output_list)  # უნდა დაბრუნდეს [4, 16]

#14
def reverse_string(input_string):
    return input_string[::-1]

# მაგალითის გაშვება:
input_str = "Hello, World!"
output_str = reverse_string(input_str)
print(output_str)
#15
def is_even(num):
    if num % 2 == 0:
        return True
    else:
        return False

# მაგალითის გაშვება:
number = 7
result = is_even(number)
print(result)  
#16
def longest_string(strings):
    longest = ""
    for s in strings:
        if len(s) > len(longest):
            longest = s
    return longest

# მაგალითის გაშვება:
input_strings = ["apple", "banana", "cherry", "date"]
longest_str = longest_string(input_strings)
print(longest_str) 
#17
def find_min_number(numbers):
    if not numbers:
        return None
    
    min_number = min(numbers)
    return min_number

# მაგალითის გაშვება:
numbers_list = [5, 3, 9, 1, 7]
min_number = find_min_number(numbers_list)
print(min_number) 
