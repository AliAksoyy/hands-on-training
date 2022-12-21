const ara =(num)=> {

    let newArr=[]
    if(num>100 && num<1000){
        console.log("ali")
        for(let i=num; i<1000; i++){
            if(i%3==0 && i%5==0){
                newArr.push(i)
            }
        }
    }
    return newArr
}

console.log(ara(754))