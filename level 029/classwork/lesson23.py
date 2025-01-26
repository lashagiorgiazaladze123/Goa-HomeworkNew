def rock_paper_scissors(player1, player2):
    if player1 == player2:
        return "Draw!"
    
    win_conditions = {
        ("rock", "scissors"): "Player 1 won!",
        ("scissors", "paper"): "Player 1 won!",
        ("paper", "rock"): "Player 1 won!"
    }
    
    if (player1, player2) in win_conditions:
        return win_conditions[(player1, player2)]
    else:
        return "Player 2 won!"
print(rock_paper_scissors("scissors", "paper"))  # Outputs: "Player 1 won!"
print(rock_paper_scissors("scissors", "rock"))   # Outputs: "Player 2 won!"
print(rock_paper_scissors("paper", "paper"))     # Outputs: "Draw!"
print(rock_paper_scissors("rock", "rock"))       # Outputs: "Draw!"
print(rock_paper_scissors("scissors", "scissors")) # Outputs: "Draw!"
print(rock_paper_scissors("paper", "scissors"))   # Outputs: "Player 2 won!"