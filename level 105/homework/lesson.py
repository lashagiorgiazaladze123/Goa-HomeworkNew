def matrix_sum(matrix):
    total = 0
    for row in matrix:
        total += sum(row)
    return total

# მაგალითი გამოყენება
matrix = [[1, 3], [1, 4], [4, 1], [2, 2]]
print(matrix_sum(matrix))  # 18
