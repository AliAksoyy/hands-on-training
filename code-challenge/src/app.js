const fah = (temp) => {
    (temp -32) / 1.8;
}
const cel = (temp) => {
    temp * 1.8 + 32
}
const total = (price, vat=0.18) => {
   return  price * (1+ vat)
}

const fibo =(num=1) => {
    if(num<1){
        throw new Error("haydi kardeş 0 'dan büyük gir")
    }


const series = [1,1];

for(let i = 0 ; i.lenght; i++){
    const a = series[i-1]
    const b = series[i-2]
    series.push(a+b)

}

return series[num-1]
}
module.exports = {fah,fibo,total,cel}

