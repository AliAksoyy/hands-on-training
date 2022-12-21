const ali = (a)=> {
    console.log(a.split(""))
    let res=""
    for(let i in a){
        if(i==0){
            res+=a[i]+"-"
        }else if(i<4){
            res+=+a[i]
        }else if(i==4){
            res+="-"+ a[i] +"-"
        }else{
            res+=a[i]
        }
    }
    return res
}


console.log(ali("025468"))