class Connect4Winner{
    constructor(){

    }

    connect4Winner(state){
        let board = state.board
        // Check down
      for (let r = 0; r < 3; r++)
          for (let c = 0; c < 7; c++)
              if (checkLine(board[r][c],board[r + 1][c], board[r + 2][c],board[r + 3][c])){
                return board[r][c]
              }
                  
    
      // Check right
      for (let r = 0; r < 6; r++)
          for (let c = 0; c < 4; c++)
              if (checkLine( board[r][c],board[r][c + 1], board[r][c + 2], board[r][c + 3])){
                return board[r][c]
              }
              
                  
    
      // Check down-right
      for (let r = 0; r < 3; r++)
          for (let c = 0; c < 4; c++)
              if (checkLine(board[r][c], board[r + 1][c + 1], board[r + 2][c + 2],board[r + 3][c + 3])){
                      return board[r][c]
                  }
                
    
      // Check down-left
      for (let r = 3; r < 6; r++)
          for (let c = 0; c < 4; c++)
              if (checkLine( board[r][c], board[r - 1][c + 1],board[r - 2][c + 2],board[r - 3][c + 3])){
                    return board[r][c]
                  }
                  
    
      return 0
    }
    
}

const checkLine = (a, b, c, d) => {
    // Check first cell non-zero and all cells match
    return a !== '' && a === b && a === c && a === d
}

