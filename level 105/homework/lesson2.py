def diagonal_sums(matrix):
    n = len(matrix)
    main_diag_sum = sum(matrix[i][i] for i in range(n))
    anti_diag_sum = sum(matrix[i][n - 1 - i] for i in range(n))
    return main_diag_sum, anti_diag_sum

# მაგალითი გამოყენება
matrix = [[1, 2, 3], 
          [4, 5, 6], 
          [7, 8, 9]]
sums = diagonal_sums(matrix)
print(sums)  # (15, 15)
