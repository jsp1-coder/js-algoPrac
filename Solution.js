	
		var Rx = 0;
		var Ry = 0;
		
		for (var i = 0; i < board.length; i++) {
			for (var j = 0; j < board[i].length; j++) {
				if(board[i][j]=='R') {
					Rx=i;
					Ry=j;
				}
				
			}
		} // R의 좌표를 찾기 위한 for문
		

		
		var count = 0;
		
		for (var j = 1; j < Ry; j++) {
			
				if (board[Rx][Ry-j]=='B') {
					break; 
					}else if (board[Rx][Ry-j]=='p') {
						count++;
						break;
					}  
			}
			
		for (var i = Ry+1; i < board[Rx].length; i++) {
			if (board[Rx][i]=='B') {
				break ; 
			}else if (board[Rx][i]=='p') {
				count++;
				break ;
			}  
		}
		// x축 for문
		
		for (var j = 1; j < Rx; j++) {
			
			if (board[Rx-j][Ry]=='B') {
				break; 
				}else if (board[Rx-j][Ry]=='p') {
					count++;
					break;
				}  
		}
		
		for (var i = Rx+1; i < board.length; i++) {
			if (board[i][Ry]=='B') {
				break ; 
			}else if (board[i][Ry]=='p') {
				count++;
				break ;
			}  
		}