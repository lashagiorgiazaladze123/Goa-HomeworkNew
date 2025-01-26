def check_winner(board):
    """
    ამოწმებს ვინ მოიგო ან ფრეა 3x3 მატრიცაში (რომელიც შედგება 'X', 'O' და ცარიელი სტრინგებისგან).
    :param board: 2D სია (3x3) 
    :return: 'X', 'O', 'Draw' ან 'Unfinished'
    """
    
    n = len(board)  
    for i in range(n):
        
        if board[i][0] != '' and all(board[i][j] == board[i][0] for j in range(n)):
            return board[i][0]
        
        
        if board[0][i] != '' and all(board[j][i] == board[0][i] for j in range(n)):
            return board[0][i]
    
    
    if board[0][0] != '' and all(board[i][i] == board[0][0] for i in range(n)):
        return board[0][0]
    
    
    if board[0][n-1] != '' and all(board[i][n-1-i] == board[0][n-1] for i in range(n)):
        return board[0][n-1]
    
    
    if all(cell != '' for row in board for cell in row):
        return 'Draw'
    

    return 'Unfinished'


board1 = [['X', 'O', 'X'],
          ['O', 'X', 'O'],
          ['O', 'X', 'X']]  

board2 = [['X', 'O', 'X'],
          ['X', 'O', 'O'],
          ['O', 'X', 'O']]  

board3 = [['X', 'X', 'X'],
          ['O', 'O', ''],
          ['O', '', '']]  
board4 = [['O', 'X', ''],
          ['X', 'O', ''],
          ['X', '', '']] 

print(check_winner(board1)) 
print(check_winner(board2))  
print(check_winner(board3))  
print(check_winner(board4))  