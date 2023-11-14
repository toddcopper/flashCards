function renderBoard() {
    for (let i = 0; i < setHeight; i++)  {
        for (let j = 0; j < setWidth; j++)  {
            countAdj(i, j);
        }
    }
    for (let i = 0; i < setHeight; i++)  {
        for (let j = 0; j < setWidth; j++)  {
            document.getElementById(bx${j}y${i}).firstChild.innerHTML = boardArr[i][j]
        }
    }
    console.log(boardArr)
}

function renderMessage() {

}