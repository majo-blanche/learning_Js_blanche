const fruits=[];
fruits.push("banana","apple","peach");
console.log(fruits.length);
fruits[5]="mango";
console.log(fruits[5]);
console.log(Object.keys(fruits));
console.log(fruits.length)
//reverse arrays
const color=["red","yellow","blue"];
color[5]="purple";
color.forEach((item,index)=> {
console.log(`${index}: ${item}`);
});
color.reverse();
console.log(color.reverse())
//arrays  using key
const colors=["red","yellow","blue"];
colors[5]="purple";
const iterator = colors.keys();
for (const key of iterator) {
  console.log(`${key}: ${colors[key]}`);
}
const newColors = colors.toReversed();
console.log(colors.toReversed())

//different ways of creating an array
