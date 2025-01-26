def transpose_matrix(matrix):
    return [[matrix[j][i] for j in range(len(matrix))] for i in range(len(matrix[0]))]

# მაგალითი გამოყენება
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
transposed = transpose_matrix(matrix)
print(transposed)
# შედეგი: [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
