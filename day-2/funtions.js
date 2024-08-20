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
        if(arguments[i]>max){
            max=arguments[i];
        }
    }
    return max;
}
console.log(x)
//invoking a function and function call 
function myFunction(a,b){
    return a*b;
}
let p =myFunction(10,2)
console.log(p)

const person={
    fullName:function(city,country){
        return this.firstName+" "+this.lastName+","+city+","+country;
    }
}
const person1={
firstName:"Majo",
    lastName:"blanche"

}
const person2={
    firstName:"Kenna",
    lastName:"Nora"   
}
const person3={
    firstName:"cham",
    lastName:"emmilia"  
}
console.log(person.fullName.call(person1))
console.log(person.fullName.call(person2,"bamenda","cameroon"))
console.log(person.fullName.call(person3,["paris","france"]))
//function to increment couter
const edd=(function(){
    let counter=-1;
return function(){counter += 1; return counter}
})();
edd();
edd();
edd();
console.log(edd());
//calculating the area of shapes
function Area(l,w,h,r){
let shape=prompt("enter a shape")
if(shape=="square"){
    let l=parseInt(prompt("enter the lenght"));
    return l*l;
}
else if(shape=="rectangle"){
    
    let l=parseInt(prompt("enter the lenght"));
    let w=parseInt(prompt("enter the width"));
    return l*w;
}
else if(shape=="triangle"){
    let w=parseInt(prompt("enter the width"));
    let h=parseInt(prompt("enter the height"));
    return h*w/2;
}
else if(shape=="cicle"){
    let r=parseInt(prompt("enter the radius"));
    p=3.14
    return p*r*r
}
else{
console.log("enter another shape please")
    }
}
let A=Area();
    console.log(Area())


