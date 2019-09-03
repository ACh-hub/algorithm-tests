const pyramid = num => {
    let row = 0;
    do {
        let tempString =''
        for(let col=0; col<num*2-1; col++){
            if(col<(Math.floor(num*2-1)/2-row-1)||col>(Math.floor(num*2-1)/2+row))
            tempString+=' '
            else
            tempString+='#'

        }
        console.log(tempString)
        row++
    }
    while (row<num)
}

pyramid(3);