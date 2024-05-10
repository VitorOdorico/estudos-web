let num = [1,2,3,4,5,6,7,8,9,10];

let fibo = num.reduce((ac,nu)=>{
    return ac += nu;

})

console.log(fibo)