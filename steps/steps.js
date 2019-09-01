// Recursive solution 
const steps = (num, row = 0, tempString='') => {
    if (row === num)
    {
        console.log(tempString)
        return;
    }

    if(tempString.length===num){
        console.log(tempString)
        return steps(num,row + 1)
    }

    if(tempString.length<=row)
    tempString+='#'
    else
    tempString+=' '

    steps(num, row, tempString)
}


// const steps = num => {
//     let it = 0;
//     do {
//         let temp = ''
//         for(let yt=0; yt<num; yt++){
//             if(yt<=it)
//                 temp += '#'
//                 else
//                 temp += ' '
//         }

//         console.log(temp)
//         it++
//     }
//     while (it<num)
// }