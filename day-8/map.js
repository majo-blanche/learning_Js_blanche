let map = new Map();
map.set('1','goodbye');
map.set(1,'hello');
map.set(true,'false');
let obt=Object.fromEntries(map);
console.log(obt.true);
console.log(map.get(1));
console.log(map.get('1'));
console.log(map.get(true))
console.log(map.size);

let john={ name:"john"};
let visitCountMap=new Map();
visitCountMap.set(john,123);
console.log(visitCountMap.get(john));

 //iterating over map
let recipeMap=new Map([
    ['orange',500],
     ['tomato',350],
     ['onion',50]
 ]);
 
for(let vegetable of recipeMap.keys()){
     console.log(vegetable);
 }
 for(let amount of recipeMap.values()){
     console.log(amount);
}
 for(let entry of recipeMap){
    console.log(entry);
}
recipeMap.forEach((value,key)=>{console.log(`${key}: ${value}`);
})


//map from object
let obj={
    name:"john",
    age:30
};
let mep = new Map(Object.entries(obj));
console.log(mep.get('name'));
console.log(mep.get('age'));

//object from map
let price=Object.fromEntries([
    ['plantain',1],
    ['banana',4],
    ['fish',6],
]);
console.log(price.fish);

//set
let set=new Set();
let johne={ name:"john"};
let peter={ name:"peter"};
let mary={name:"mary"};
set.add(john);
set.add(peter);
set.add(mary);
set.add(john);
set.add(peter);
console.log(set.size);
for(let user of set){
    console.log(user.name)
}
//iteration over set
let sit=new Set(["majo","nekam","blanche"]);
for(let value of sit){
    console.log(value);
}
sit.forEach((value, sit) => {
    console.log(value);
  });