const fizzbuzz = num => {
    let tempString =''
    for(let it = 1; it <=num; it++){
  
        if(it%3==0)
        tempString +='fizz'


        if(it%5==0)
        tempString+='buzz'


        if(tempString=='')
        tempString=it

        console.log(tempString);
        tempString=''
    }
}

