function product(p1,p2){
    return(p1*p2)
}
let result=product(5,4)
console.log(result)
//adding numbers
function add(x,y,z){
    return(x+y+z)
}
let answer=add(2,5,9)
console.log(answer)
//converting from fahrenheit to celsius
function tocelsius(fahrenheit){
    return(5/9)*(fahrenheit-32)
}
let value="the temperature is"+tocelsius(55)+"celsius";
console.log(value)
/*funtion expression
const myFunction= funtion ("a","b","return a*b");
let z=x(4,3);
console.log(z)*/
function myFunction(a,b) {
return a*b
}
let x=myFunction(4,3)*2;
console.log(x);
//self-invoking
let annonymous=(function (){
    let y="hello";
    console.log(y);
})()
console.log(annonymous);
//the arguments object
x=findMax(1,123,500,115,44,88);
function findMax(){
    let max= -Infinity;
    for(let i=0;i<arguments.length;i++){
        if(arguments[i]){
            max=arguments[i];
        }
    }
    return max;
}
//invoking a function
function myFunction(a,b){
    return a*b;
}
myFunction(10,2)
