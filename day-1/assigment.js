function RandNum(min,max){
    return parseInt(Math.random())
}
let rand =RandNum(1-100);
console .log("randomNumber =",rand)
let num=parseInt(prompt("enter a random number"))
console.log(num);

if(rand=num){
    console.log("congratulation")
}
else{
    console.log("try again")
}
//for loop
for (let i = 0; i < 50; i++) {
    console.log("i like singing")
}