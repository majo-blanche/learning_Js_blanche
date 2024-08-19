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
//whie loop
let i=10
while (i<50) {
   i=i+5;
   console.log(i) 
}
let age=14
if (age<21 ) {
    console.log("she can not vote")
    
} else {
    console.log("she can vote")
}