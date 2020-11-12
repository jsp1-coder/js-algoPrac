const board = 
[[".",".",".",".",".",".",".","."],[".",".","B","B","B","B","B","."],[".","p","B","p","p","p","B","p"],[".","p","B","p","R","p","B","p"],[".","p","B","p","p","p","B","p"],[".",".","B","B","B","B","B","."],[".",".",".","p","p","p",".","."],[".",".",".",".",".",".",".","."]];


let Rx = 0;
let Ry = 0;
let answer = 0;

// Rook의 x,y 좌표를 찾기 위한 for문
for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
       if ( board[i][j] === 'R' ) {
           Rx = i;
           Ry = j;
       }
    }
}

// Rook의 x좌표에서 좌측으로
for (let i = Ry-1; i > 0; i--) {
     if(board[Rx][i]==='B'){
            break;
        }
        if(board[Rx][i]==='p'){
            answer++;
            break;
        }        
}
// Rook의 x좌표에서 우측으로
for (let i = Ry+1; i < board[0].length; i++) {
    if(board[Rx][i]==='B'){
        break;
    }        
    if(board[Rx][i]==='p'){
       answer++;
      break;
                    }
}


// Rook의 y좌표에서 위로
for (let i = Rx-1; i > 0; i--) {
     if(board[i][Ry]==='B'){
            break;
        }
        if(board[i][Ry]==='p'){
            answer++;
            break;
        }        
}

// Rook의 y좌표에서 아래로
for (let i = Rx+1; i < board.length; i++) {
    if(board[i][Ry]==='B'){
        break;
    }
    if(board[i][Ry]==='p'){
        answer++;
        break;
    }    
}


