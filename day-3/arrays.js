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
const animals=["pig","dog","cat","lion"]
    const animalsString=animals.join(",");
console.log(animalsString);
//access an array item by its index
const shapes=["square","triangle","regtangle","cicle","pentagon"]
shapes[0];
console.log(shapes[0]);
//checking if an arr contain aparticular element
console.log(shapes.includes("banana"));
console.log(shapes.indexOf("triangle"));
//append an item to an array
const newlength=shapes.push("trapezium");
console.log(shapes);
console.log(newlength);
//removing the last element in an array
const removeditem=shapes.pop();
console.log(shapes);
console.log(removeditem); 
//removing multiple item from thre end of the array
const removeditems=shapes.splice(2);
console.log(shapes);
console.log(removeditems);
//removing the first item from and array
const removedItem=shapes.shift();
console.log(shapes)
console.log(removedItem)
//removing mul-items at the beginning of an array
const start=0;
const deleteCount=2;
const removedelement=shapes.splice(start,deleteCount);
console.log(shapes);
console.log(removedelement);
//add a new first iterm to an array
const newLength = shapes.unshift("polygone","hexagone","octagone");
console.log(shapes);
console.log(newLength);
//remove a single item by index
const star=shapes.indexOf("hexagone");
const deletCount=1;
const removedlement=shapes.splice(star,deletCount);
console.log(shapes)
console.log(removedlement)
//remove multiple items bu index
const removedelemen=shapes.splice(0,2,"cone","pyramide")
console.log(removedelemen)
//iterate over an array
for(const shape of shapes){
    console.log(shape);
}
//call a function on each element in an array
shapes.forEach((item,index,array) =>{
    console.log(index,item);
})
//merge multiple arrays together
const combinedfriuts=animals.concat(shapes);
console.log(combinedfriuts)
//copy an array
console.log([...animals])
console.log(Array.from(animals))
console.log(animals.slice())
const animals2=animals
animals.unshift("goat","hen")
console.log(animals)
console.log(animals2)

//creating 2-d array
const board = [
    ["R", "N", "B", "Q", "K", "B", "N", "R"],
    ["P", "P", "P", "P", "P", "P", "P", "P"],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    ["p", "p", "p", "p", "p", "p", "p", "p"],
    ["r", "n", "b", "q", "k", "b", "n", "r"],
  ];
  
  console.log(`${board.join("\n")}\n\n`);
  
  // Move King's Pawn forward 2
  board[4][4] = board[6][4];
  board[6][4] = " ";
  console.log(board.join("\n"));

  const square= [
    ["r","n","q"],
    ["a","h","z"],
    ["t","s","y"],
    ["b","j","f"],
  ];
  console.log(`${square.join("\n")}`)
  //time table
  const values=[];
  for( let x=0;x<=13;x++){
    values.push([x*2,x*3,x*4,x*5,x*6,x*7,x*8,x*9,x*10,x*11,x*12]);
  }
  console.table(values);