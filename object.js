const girl={
    firstname:"majo",
    lastname :"blanche",
    age:17,
    eyecolor:"black",
    nationality:"english",
    fullname:function(){
        return this.firstname+" "+this.lastname;
         },
         
        //nested object
 cars :{
    car1:"ford",
    car2:"bmw",
    car3:"fiat"
}

    };
delete girl.age;//deleting
console.log(girl.firstname +" is " +girl.age +" year old");

console.log(girl);
console.log(girl.fullname());

const person=new Object();
person.firstname="majo";
person.lastname="blanche";
person.age=50;
person.eyecolor="black"
delete person.age;
person.name= function(){
    return(this.firstname+" "+this.lastname).toUpperCase();
};
console.log(person)
console.log(person.name());
//build a text
let text="good morning";
for(let x in person){
    text += person[x]+" ";
};
//display text
document.getElementById("demo").innerHTML = text;
console.log(text);

//using objet.values()
const myArray=object.value(person);
//display the array
document.getElementById("demo").innerHTML=myArray;

