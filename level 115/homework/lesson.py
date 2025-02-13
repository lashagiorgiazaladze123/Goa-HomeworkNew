def sum_digits(n):
    n = abs(n) 
    result = 0
    while n > 0:
        result += n % 10
        n //= 10 
    return result

def sum_two_largest(lst):
    if len(lst) < 2:
        return None 

    max1 = max(lst) 
    lst.remove(max1)  
    max2 = max(lst)  
    
    return max1 + max2


print(sum_digits(123))  
print(sum_digits(405))  
print(sum_digits(-456)) 

# Testing sum_two_largest function
print(sum_two_largest([3, 7, 2, 9, 5]))  
print(sum_two_largest([10, 10, 5, 3]))   
