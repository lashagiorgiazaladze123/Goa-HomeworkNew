def odd_index_sum(numbers):
    # ჯამი იმ რიცხვების, რომლებიც კენტ ინდექსებზე არიან
    total = 0
    
    # enumerate ფუნქცია გაწვდოს ინდექსი და შესაბამისი მნიშვნელობა
    for index, number in enumerate(numbers):
        # თუ ინდექსი კენტია
        if index % 2 != 0:
            total += number
    
    return total

# ტესტირება
numbers_list = [1, 3, 5, 7, 9, 11]
result = odd_index_sum(numbers_list)
print("Sum of numbers at odd indices:", result)

from turtle import *
forward(100)
left(90)
forward(200)
exitonclick()