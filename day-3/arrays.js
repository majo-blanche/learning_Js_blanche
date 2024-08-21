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

/*different ways of creating an array
// 'fruits' array created using array literal notation.
const fruits1 = ["Apple", "Banana"];
console.log(fruit1.length);
// 'fruits2' array created using the Array() constructor.
const fruits2 = new Array("Apple", "Banana");
console.log(fruits2.length);
// 'fruits3' array created using String.prototype.split().
const fruits3 = "Apple, Banana".split(", ");
console.log(fruits3.length);
*/
//creating a string from an array
const animals=["pig","dog"]
    const animalsString=animals.join(",");
console.log(animalsString);
//access an array item by its index
const shapes=["square","triangle","regtangle","cicle"]
shapes[0];
console.log(shapes[0]);
//checking if an arr contain aparticular element
console.log(shapes.includes("banana"));
console.log(shapes.indexOf("triangle"));
//append an item to an array
const newlength=shapes.push("trapezium");
console.log(shapes);
console.log(newlength);