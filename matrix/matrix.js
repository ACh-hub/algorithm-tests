const matrix = n => {
    const solution = [];
    for(let it=0; it<n; it++)
    solution.push([]);
    let startRow = 0
    let endRow = n-1
    let startCol = 0
    let endCol = n-1

    let number = 1

    while(startRow<=endRow && startCol<=endCol){

        for(let colIt=startCol; colIt<=endCol; colIt++){
            solution[startRow][colIt] = number;
            number++
        }
        startRow++

        for(let rowIt=startRow; rowIt<=endRow; rowIt++){
            solution[rowIt][endCol] = number
            number++
        }
        endCol--

        for(let colIt=endCol; colIt>=startCol; colIt--){
            solution[endRow][colIt] = number
            number++
        }
        endRow--

        for(let rowIt=endRow; rowIt>=startRow; rowIt--){
            solution[rowIt][startCol] = number
            number++
        }
        startCol++

    }

    return solution;
}
