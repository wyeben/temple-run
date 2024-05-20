let grid = 8;
let chessBoard = '';

for (let row = 0; row < grid; row++){
    let line = '';
    for(let col = 0; col < grid; col++){
        if ((row + col) % 2 == 0){
            line += ' ';
        }else{
            line += '#';
        }
    
    }
    chessBoard += line + '\n';
}
console.log(chessBoard)