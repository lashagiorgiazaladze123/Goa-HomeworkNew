def manual_sort(arr):
    # შექმნათ ფლაგი, რათა გაიგოთ, თუ ხორციელდება ცვლილება
    n = len(arr)
    for i in range(n):
        swapped = False
        # ბოლო ელემენტამდე გატარება, რადგან ყოველ ციკლში ყველაზე დიდი ელემენტი გადადის ბოლოს
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                # გაცვლის პროცესი
                arr[j], arr[j+1] = arr[j+1], arr[j]
                swapped = True
        # თუ ციკლის ბოლოს არ მოხდა გაცვლა, ციკლი სრულდება
        if not swapped:
            break
    return arr

def manual_filter(arr, threshold):
    filtered_arr = []
    for num in arr:
        if num >= threshold:
            filtered_arr.append(num)
    return filtered_arr
