const steps = num => {
    let it = 0;
    do {
        let temp = ''
        for(let yt=0; yt<num; yt++){
            if(yt<=it)
                temp += '#'
                else
                temp += ' '
        }
        console.log(temp)
        it++
    }
    while (it<num)
}
