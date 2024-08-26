
// function myFirst() {
//     myDisplayer("Hello");
//   }
  
//   function mySecond() {
//     myDisplayer("Goodbye");
//   }
  
//   mySecond();
//   myFirst();
// console.log(myFirst())

function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
async function myFunction() {return "hello";} 
    myFunction().then(
        function(value) {myDisplayer(value)},
        function(error) {myDisplayer(error)}
    );
    setInterval(myFunction,1000);
    function myFunction(){
        let d=new Date();
        document.getElementById("demo").innerHTML=
        d.getHours()+ ":" +
        d.getMinutes()+ ":" +
        d.getSeconds();
    }
    
